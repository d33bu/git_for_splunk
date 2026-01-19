import json
import os
import sys

from splunk.persistconn.application import PersistentServerConnectionApplication

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
import o11y_utils
from o11y_token_service import get_o11y_realm_and_access_token

logger = o11y_utils.setup_logger('o11y_config')


class O11yConfigService(PersistentServerConnectionApplication):

    def __init__(self, _command_line, _command_arg):
        super(PersistentServerConnectionApplication, self).__init__()

    def handle(self, in_string):
        request = json.loads(in_string.decode('utf-8'))
        session = request.get('session')
        auth_token = session.get('authtoken')
        service = o11y_utils.get_splunk_service(auth_token, in_string)

        admin_set = o11y_utils.AdminSettings.get_settings(service)

        auto_update_enabled = str(admin_set.get('auto_update', 'False')).lower() == 'true'
        auto_field_mapping_enabled = str(admin_set.get('auto_field_mapping', 'False')).lower() == 'true'
        rc_discovery_flag_enabled = str(admin_set.get('rc_discovery', 'True')).lower() == 'true'
        realm, token = get_o11y_realm_and_access_token(in_string)
        payload = {'tokenSet': bool(token and realm), 'autoUpdate': auto_update_enabled,
                   'autoFieldMapping': auto_field_mapping_enabled,
                   'rcDiscovery': rc_discovery_flag_enabled}

        return {'status': 200, 'payload': payload}

    def handleStream(self, handle, in_string):
        raise NotImplementedError('PersistentServerConnectionApplication.handleStream')

    def done(self):
        pass
