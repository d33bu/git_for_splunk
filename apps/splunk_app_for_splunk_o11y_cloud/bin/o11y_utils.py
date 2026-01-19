import logging
import os
import sys
import json
from xml.etree import ElementTree
from abc import ABC

current_path = os.path.dirname(__file__)
sys.path.append(os.path.join(current_path, '..', 'libs'))
from splunk.appserver.mrsparkle.lib import util
from splunklib.client import Service
from splunklib.binding import HTTPError

IUE_LOG_FILE_NAME = 'splunk_o11y_app.log'
APP_NAME = 'splunk_app_for_splunk_o11y_cloud'
O11Y_TOKEN_NAME = 'o11y_access_token'
SPLUNKD_SCHEME = 'https'
SPLUNKD_HOST = 'localhost'
SPLUNKD_PORT = 8089
ADMIN_SETTINGS = 'admin-settings'
ENV_SETTINGS = 'env-settings'


def setup_rotating_log_file():
    try:
        splunk_home_log_path = util.make_splunkhome_path(["var", "log", "splunk"])
        # check to see if the SPLUNK_HOME based log path exists
        if not os.path.exists(splunk_home_log_path):
            # check to see if the relative path based log path exists
            splunk_base = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..', '..'))
            splunk_base_log_path = os.path.join(splunk_base, 'var', 'log', 'splunk')
            if not os.path.exists(splunk_base_log_path):
                # disable logging with noop handler
                logger.addHandler(logging.NullHandler())
                return logger
            else:
                log_file_name = os.path.join(splunk_base_log_path, IUE_LOG_FILE_NAME)
        else:
            log_file_name = os.path.join(splunk_home_log_path, IUE_LOG_FILE_NAME)

        # valid log file path exists and rotate at 10 MB
        file_handler = logging.handlers.RotatingFileHandler(log_file_name, maxBytes=10240000, backupCount=10)
        logging_format = "%(asctime)s %(levelname)-s\t%(name)s:%(lineno)d - %(message)s"
        file_handler.setFormatter(logging.Formatter(logging_format))
        return file_handler
    except Exception:
        # disable logging with noop handler
        return logging.NullHandler()


def setup_logger(modulename):
    logger = logging.getLogger(modulename)
    logger.propagate = False  # Prevent the log messages from being duplicated in the python.log file
    logger.setLevel(logging.INFO)
    logger.addHandler(rotating_log_file)
    return logger


# param: json string that is passed into REST handler (in_string)
def extract_system_auth_session_key(in_string):
    request = json.loads(in_string.decode('utf-8'))
    system_auth_session_key = request.get('system_authtoken')
    return system_auth_session_key


# param: json string that is passed into REST handler (in_string)
def extract_splunkd_scheme_host_port(in_string):
    host = SPLUNKD_HOST
    port = SPLUNKD_PORT
    scheme = SPLUNKD_SCHEME
    request = json.loads(in_string.decode('utf-8'))
    server = request.get('server')
    if server:
        rest_uri = server.get('rest_uri')
        if rest_uri:
            uri_segments = rest_uri.split(':')
            if len(uri_segments) > 2:
                scheme = uri_segments[0]
                host = uri_segments[1][2:]
                port = uri_segments[2]
    return scheme, host, port


def get_host(service, realm):
    return (EnvSettings.get_env_setting(service)
            .get(f'proxy_host_{realm.lower()}', f'app.{realm.lower()}.signalfx.com'))


def get_signalflow_host(service, realm):
    return (EnvSettings.get_env_setting(service)
            .get(f'signalflow_host_{realm.lower()}', f'stream.{realm.lower()}.signalfx.com'))


def get_splunk_service(session_key, in_string):
    splunkd_scheme, splunkd_host, splunkd_port = extract_splunkd_scheme_host_port(in_string)
    return Service(scheme=splunkd_scheme, host=splunkd_host, port=splunkd_port,
                   token=session_key, app=APP_NAME)


def normalize_time(timestamp):
    if timestamp is not None:
        if len(str(round(float(timestamp)))) == 10:
            # ex: 1586473882.963976
            return float(timestamp)
        else:
            ts_str = str(timestamp)
            if len(ts_str) > 10 and '.' not in ts_str:
                return float(ts_str[:10] + '.' + ts_str[10:])


# Initialize the rotating log file which we will use for multiple loggers.
rotating_log_file = setup_rotating_log_file()

logger = setup_logger('o11y_utils')


class Settings(ABC):
    setting = None

    @classmethod
    def get_settings(cls, service):
        try:
            path_to_setting = f'/services/properties/splunk_app_for_splunk_o11y_cloud/{cls.setting}'

            get_setting = service.get(
                path_to_setting).body.read().decode('utf-8')

            xml = ElementTree.fromstring(get_setting)
            entries = xml.findall('.//{http://www.w3.org/2005/Atom}entry')
            settings = {}

            for entry in entries:
                name = entry.find('{http://www.w3.org/2005/Atom}title').text
                value = entry.find('{http://www.w3.org/2005/Atom}content').text

                if name is not None and value is not None:
                    settings[name] = value

            logger.info(f'Loaded {cls.setting}: {settings}')

            return settings

        except Exception as e:
            if isinstance(e, HTTPError) and e.status == 404:
                pass
            elif isinstance(e, HTTPError) and e.status == 403:
                logger.warning(f'Received 403 error while loading {cls.setting}: {str(e)} ')
            else:
                logger.error(f'Error loading {cls.setting}: {str(e)}')

        return {}


class AdminSettings(Settings):
    setting = ADMIN_SETTINGS


class EnvSettings(Settings):
    _settings = None
    setting = ENV_SETTINGS

    @classmethod
    def get_env_setting(cls, service):

        # caching
        if cls._settings is None:
            cls._settings = cls.get_settings(service)
        return cls._settings

    @classmethod
    def reset(cls):
        cls._settings = None
