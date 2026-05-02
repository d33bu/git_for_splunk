#
# SPDX-FileCopyrightText: 2021 Splunk, Inc. <sales@splunk.com>
# SPDX-License-Identifier: LicenseRef-Splunk-8-2021
#
#
import json
import re
import urllib.parse

import splunk_ta_gcp.legacy.consts as ggc
import splunktalib.common.util as utils
import splunktalib.common.xml_dom_parser as xdp
import splunktalib.conf_manager.ta_conf_manager as tcm
import splunktalib.hec_config as hc
import splunktalib.modinput as modinput
import splunktalib.rest as sr
from splunksdc import log as logging
import splunk_ta_gcp.legacy.common as tacommon
from splunk_ta_gcp.common.settings import Settings
from splunk_ta_gcp.common.credentials import CredentialFactory

logger = logging.get_module_logger()


class GoogleConfig:
    _appname = ggc.splunk_ta_google

    def __init__(self, service):
        self.service = service
        metas, stanzas = modinput.get_modinput_configs_from_stdin()
        self.metas = metas
        self.stanzas = stanzas
        self._task_configs = self._get_tasks()
        self._handle_hec()

    @staticmethod
    def data_collection_conf():
        return None

    @staticmethod
    def _metric_key():
        return None

    @staticmethod
    def _get_metrics(logger, config):
        return []

    def _expand_metrics(self, task, global_settings, google_creds):
        # Maybe regex
        metrics = set(task[self._metric_key()].split(","))
        all_metrics = set()

        config = {}
        config.update(task)
        config.update(global_settings[ggc.proxy_settings])
        config.update(google_creds[task[ggc.google_credentials_name]])

        available_metircs = self._get_metrics(logger, config)
        for metric in metrics:
            for available_metirc in available_metircs:
                pmetric = metric
                if not metric.endswith("$"):
                    pmetric = "{metric}$".format(metric=metric)

                if re.match(pmetric, available_metirc) is not None:
                    all_metrics.add(available_metirc)
        logger.debug("All matched metrics=%s", all_metrics)
        return all_metrics

    def _get_tasks(self):

        server_uri = self.metas[ggc.server_uri]
        session_key = self.metas[ggc.session_key]

        conf_mgr = tcm.TAConfManager(
            self.data_collection_conf(),
            server_uri,
            session_key,
            appname=self._appname,
        )

        # setup log level from settings file
        config = tacommon.get_config_object(
            server_uri, session_key, app_name=self._appname
        )
        settings = Settings.load(config)
        settings.setup_log_level()

        data_collections = conf_mgr.all(return_acl=False)
        if not data_collections:
            return []

        data_collections = {
            k: v
            for k, v in data_collections.items()
            if utils.is_false(v.get(ggc.disabled))
        }

        global_settings = get_global_settings(
            self.metas[ggc.server_uri], self.metas[ggc.session_key]
        )

        google_creds = get_google_creds(
            self.metas[ggc.server_uri], self.metas[ggc.session_key]
        )

        return self._expand_tasks(global_settings, google_creds, data_collections)

    def _expand_tasks(self, global_settings, google_creds, data_collections):
        keys = [ggc.index, ggc.name]
        metric_key = self._metric_key()
        all_tasks = []
        for task in data_collections.values():
            cred_name = task[ggc.google_credentials_name]
            if cred_name not in google_creds:
                logger.error("Invalid credential name ")
                continue

            metrics = self._expand_metrics(task, global_settings, google_creds)
            for metric in metrics:
                metric = metric.strip()
                if not metric:
                    continue

                new_task = {}
                new_task.update(task)
                with utils.save_and_restore(new_task, keys):
                    new_task.update(global_settings[ggc.global_settings])
                    new_task.update(global_settings[ggc.proxy_settings])
                    new_task.update(google_creds[cred_name])
                    new_task.update(self.metas)
                new_task[ggc.google_service] = self.service
                new_task[ggc.appname] = self._appname
                new_task[metric_key] = metric
                all_tasks.append(new_task)

        return all_tasks

    def get_tasks(self):
        return self._task_configs

    def _handle_hec(self):
        if not self._task_configs:
            return

        use_hec = utils.is_true(self._task_configs[0].get(ggc.use_hec))
        use_raw_hec = utils.is_true(self._task_configs[0].get(ggc.use_raw_hec))
        if not use_hec and not use_raw_hec:
            return

        hec = hc.HECConfig(self.metas[ggc.server_uri], self.metas[ggc.session_key])

        hec_input = hec.get_http_input("google_cloud_platform")
        port = self._task_configs[0].get(ggc.hec_port, 8088)
        if not hec_input:
            logger.info("Create HEC data input")
            hec_settings = {
                "enableSSL": 1,
                "port": port,
                "output_mode": "json",
                "disabled": 0,
            }
            hec.update_settings(hec_settings)
            input_settings = {
                "name": "google_cloud_platform",
            }
            hec.create_http_input(input_settings)
            hec_input = hec.get_http_input("google_cloud_platform")

        hostname, _ = utils.extract_hostname_port(self.metas[ggc.server_uri])
        hec_uri = "https://{hostname}:{port}".format(hostname=hostname, port=port)
        if hec_input:
            keys = [ggc.index, ggc.name]
            for task in self._task_configs:
                with utils.save_and_restore(task, keys):
                    task.update(hec_input[0])
                    task["hec_server_uri"] = hec_uri
        else:
            raise Exception("Failed to get HTTP input configuration")


def get_google_creds(server_uri, session_key, app=ggc.splunk_ta_google, cred_name=""):
    """Get Google credentials for the specified credential name.

    Args:
        server_uri (str): Splunk server uri
        session_key (str): Splunk session key
        app (str, optional): Defaults to ggc.splunk_ta_google.
        cred_name (str, optional): Google credential name. Defaults to "".

    Returns:
        dict: A dictionary containing the Google credentials for the specified credential name.
    """
    config_m = tacommon.get_config_object(server_uri, session_key, app_name=app)
    credentails = CredentialFactory(config_m).get_stanza(cred_name)
    creds = {}
    if cred_name:
        cred = json.loads(credentails[ggc.google_credentials])
        credentails[ggc.google_credentials] = cred
        creds[cred_name] = credentails
    else:
        for cred in credentails:
            c = json.loads(credentails[cred][ggc.google_credentials])
            credentails[cred][ggc.google_credentials] = c
            creds[cred] = credentails[cred]
    return creds


def get_global_settings(server_uri, session_key, app=ggc.splunk_ta_google):
    """Get Global Settings for specified app..

    Args:
        server_uri (str): Splunk server uri
        session_key (str): Splunk session key
        app (str, optional): Defaults to ggc.splunk_ta_google.

    Returns:
        dict: A dictionary containing the global settings and proxy settings.
    """
    config_m = tacommon.get_config_object(server_uri, session_key, app_name=app)
    settings = Settings.load(config_m)
    proxy_settings = vars(settings._proxy)
    proxy = {
        ggc.proxy_enabled: 1 if proxy_settings.get("enabled") else 0,
        ggc.proxy_type: proxy_settings.get("scheme"),
        ggc.proxy_rdns: 1 if proxy_settings.get("rdns") else 0,
        ggc.proxy_url: (
            proxy_settings.get("host")
            if utils.is_true(proxy_settings.get("enabled"))
            else None
        ),
        ggc.proxy_port: proxy_settings.get("port"),
        ggc.proxy_username: proxy_settings.get("username"),
        ggc.proxy_password: proxy_settings.get("password"),
    }
    return {
        ggc.proxy_settings: proxy,
        ggc.global_settings: vars(settings._general),
    }


def get_google_settings(server_uri, session_key, cred_name):
    creds = get_google_creds(server_uri, session_key, cred_name=cred_name)
    global_settings = get_global_settings(server_uri, session_key)
    settings = {}
    settings.update(creds[cred_name])
    settings.update(global_settings[ggc.proxy_settings])
    return settings
