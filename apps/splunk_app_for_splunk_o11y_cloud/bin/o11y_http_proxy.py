import json
import os
import sys

import requests
from splunk.persistconn.application import PersistentServerConnectionApplication

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from o11y_token_service import get_o11y_realm_and_access_token
from request_utils import RequestValidationException, validate_request
import o11y_utils

logger = o11y_utils.setup_logger('o11y_http_proxy')

O11Y_URL_PREFIX = '/o11y'


class O11yHttpProxy(PersistentServerConnectionApplication):
    def __init__(self, _command_line, _command_arg):
        super(PersistentServerConnectionApplication, self).__init__()

    def handle(self, in_string):
        request = json.loads(in_string.decode('utf-8'))
        realm, token = get_o11y_realm_and_access_token(in_string)

        if not realm:
            return {'status': 403, 'payload': {'error': 'No O11y Access Token found.'}}

        try:
            validate_request(request)
        except RequestValidationException as e:
            logger.warning(f'Request validation - {e.message}')
            return {'status': e.status_code, 'payload': {'error': e.message}}

        request_body = request.get('payload')
        request_method = request.get('method')
        session = request.get('session')
        auth_token = session.get('authtoken')
        service = o11y_utils.get_splunk_service(auth_token, in_string)

        path = request.get('rest_path').replace(O11Y_URL_PREFIX, '')
        realm_hostname = o11y_utils.get_host(service, realm)
        o11y_request_url = f'https://{realm_hostname}{path}'
        o11y_headers = {
            'X-SF-Token': token,
            'Content-Type': 'application/json'
        }

        o11y_request = {
            'method': request_method,
            'url': o11y_request_url,
            'body': str(request_body),
            'params': request.get('query')
        }
        logger.info(f'Request to O11y: {o11y_request}')

        try:
            o11y_response = requests.request(
                request_method, o11y_request_url, data=request_body, headers=o11y_headers, params=request.get('query'))

            logger.info(f'Response from O11y: {o11y_response}')
            json_data = o11y_response.json()

            return {'status': o11y_response.status_code, 'payload': json_data}

        except Exception as e:
            logger.error(
                f'An error occurred from request {o11y_request_url}: {e}')
            return {'status': 500, 'payload': {'error': str(e)}}

    def handleStream(self, handle, in_string):
        raise NotImplementedError(
            'PersistentServerConnectionApplication.handleStream')

    def done(self):
        pass
