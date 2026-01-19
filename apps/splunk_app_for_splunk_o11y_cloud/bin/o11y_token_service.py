import json

import requests
from splunk.persistconn.application import PersistentServerConnectionApplication
import os
import sys
from http import HTTPStatus
import socket

current_path = os.path.dirname(__file__)
sys.path.append(current_path)
import o11y_utils
from request_utils import RequestValidationException

logger = o11y_utils.setup_logger('o11y_token_service')


# Read the access token using the systemAuth token.
# Requires to set passSystemAuth = true in restmap.conf for the REST handler.
# param: json string that is passed into REST handler (in_string)
def get_o11y_realm_and_access_token(in_string):
    session_key = o11y_utils.extract_system_auth_session_key(in_string)
    service = o11y_utils.get_splunk_service(session_key, in_string)
    o11y_access_token = None
    realm = None
    try:
        for credential in service.storage_passwords:
            if (credential.content.get('username', None) == o11y_utils.O11Y_TOKEN_NAME):
                o11y_access_token = credential.content.get('clear_password', None)
                realm = credential.content.get('realm', None)
                return realm, o11y_access_token
    except Exception as e:
        logger.exception(e)
        raise e

    return realm, o11y_access_token


def get_o11y_org(realm, o11y_token, service):
    # Validates the realm and token by fetching the related org.
    if not o11y_token or not o11y_token.strip():
        raise RequestValidationException({'token': 'Token is required'})
    elif not realm:
        raise RequestValidationException({'realm': 'Realm is required'})
    o11y_host_name = o11y_utils.get_host(service, realm)
    o11y_org_url = f'https://{o11y_host_name}/v2/organization'

    o11y_response = requests.get(o11y_org_url, headers={
        'X-SF-Token': o11y_token
    })

    if o11y_response.status_code == HTTPStatus.OK:
        return o11y_response.json()
    elif o11y_response.status_code == HTTPStatus.UNAUTHORIZED:
        raise RequestValidationException({'token': 'Token is invalid'})
    else:
        logger.warn(
            f'Unexpected response received from request:{o11y_org_url} ,'
            'response code:{o11y_response.status_code} ,'
            'o11y_response:{o11y_response}')


def validate_token(realm, o11y_token, service):
    # Validates the realm and token by fetching the related org.
    if not o11y_token or not o11y_token.strip():
        raise RequestValidationException({'token': 'Token is required'})
    elif not realm:
        raise RequestValidationException({'realm': 'Realm is required'})
    o11y_host_name = o11y_utils.get_host(service, realm)
    # Check if the realm is valid
    try:
        socket.gethostbyname(o11y_host_name)
    except Exception:
        logger.info(f'Invalid realm supplied: {realm}')
        raise RequestValidationException({'realm': 'Realm is invalid'})

    # If the org can be fetched without exception, the token is valid.
    return get_o11y_org(realm, o11y_token, service)


class TokenService(PersistentServerConnectionApplication):
    def __init__(self, _command_line, _command_arg):
        super(PersistentServerConnectionApplication, self).__init__()
        self.storage_passwords = None

    def _get_all_tokens(self, service):
        o11y_access_tokens = []
        for credential in self.storage_passwords:
            if credential.content.get('username', None) == o11y_utils.O11Y_TOKEN_NAME:
                realm = credential.content.get('realm', None)
                o11y_access_token = credential.content.get('clear_password', None)

                try:
                    organization = get_o11y_org(realm, o11y_access_token, service)
                except RequestValidationException:
                    organization = None

                token_definition = {
                    'token': o11y_access_token,
                    'realm': realm,
                    'status': 'ACTIVE' if organization else 'INACTIVE',
                    'orgName': organization['organizationName'] if organization else None,
                    'orgId': organization['id'] if organization else None,
                    'url': organization['url'] if organization else None
                }
                o11y_access_tokens.append(token_definition)

        return o11y_access_tokens

    def _get_token(self, realm):
        o11y_access_token = self._get_token_from_passwords(realm)

        if o11y_access_token:
            return {'token': (o11y_access_token.content.get('clear_password', None)), 'realm': realm}

        return None

    def _get_token_from_passwords(self, realm):
        for credential in self.storage_passwords:
            if ((credential.content.get('username', None) == o11y_utils.O11Y_TOKEN_NAME)
                    and (credential.content.get('realm', None) == realm)):
                return credential

        return None

    def _save_token(self, o11y_token, realm, service):
        org = validate_token(realm, o11y_token, service)
        self._delete_all_tokens()
        logger.debug('Before saving the new token')
        self.storage_passwords.create(o11y_token, o11y_utils.O11Y_TOKEN_NAME, realm)
        logger.debug('After saving the new token')
        return {
            'token': o11y_token,
            'realm': realm,
            'status': 'ACTIVE',
            'orgName': org['organizationName'],
            'orgId': org['id'],
            'url': org['url']
            }

    def _delete_token(self, realm):
        o11y_access_token = self._get_token_from_passwords(realm)

        if o11y_access_token is None:
            return None
        else:
            logger.debug('Before deleting the token')
            deleted_token = o11y_access_token.delete()
            logger.debug('after deleting the token')
            return deleted_token

    def _delete_all_tokens(self):
        for credential in self.storage_passwords:
            if credential.content.get('username', None) == o11y_utils.O11Y_TOKEN_NAME:
                credential.delete()

    def _status_message(self, exception_string):
        if 'HTTP 403 Forbidden' in str(exception_string):
            return {'status': 403, 'payload': {'error': 'Unauthorized'}}
        else:
            return {'status': 500, 'payload': {'error': 'exception due to internal server error'}}

    def handle(self, in_string):
        request = json.loads(in_string.decode('utf-8'))
        request_method = request.get('method')
        session = request.get('session', {})
        session_key = session.get('authtoken')

        service = o11y_utils.get_splunk_service(session_key, in_string)
        self.storage_passwords = service.storage_passwords

        if request_method == 'GET':
            realm = self._get_realm_from_query_params(request)
            if not realm:
                realm = '*'

            try:
                logger.info('Getting token for realm %s', realm)
                if realm == '*':
                    o11y_token_response = self._get_all_tokens(service)
                else:
                    o11y_token_response = self._get_token(realm)
            except Exception as e:
                logger.exception(e)
                return self._status_message(str(e))

            if o11y_token_response is None:
                return {'status': 200, 'payload': {'message': 'o11y token not found for realm ' + str(realm)}}
            else:
                return {'status': 200, 'payload': o11y_token_response}

        elif request_method == 'POST':
            query_payload = request.get('payload', '{}')
            query_params = json.loads(query_payload)
            o11y_token = query_params.get('token')
            realm = query_params.get('realm')

            try:
                logger.info('Saving token for realm %s', realm)
                saved_token = self._save_token(o11y_token, realm, service)
            except RequestValidationException as e:
                logger.warning(f'Unable to validate token for realm {realm} - {e}')
                return {'status': e.status_code, 'payload': {'error': e.message}}
            except Exception as e:
                logger.exception(e)
                return self._status_message(str(e))

            if saved_token:
                return {'status': 201, 'payload': saved_token}
            else:
                return {'status': 500,
                        'payload': {'error': 'internal server error, o11y token not saved for realm ' + str(realm)}}

        elif request_method == 'DELETE':
            realm = self._get_realm_from_query_params(request)

            if not realm:
                return {'status': 400, 'payload': {'error': 'Bad request'}}

            try:
                logger.info('Deleting token for realm %s', realm)
                deleted_token = self._delete_token(realm)
            except Exception as e:
                logger.exception(e)
                return self._status_message(str(e))

            if deleted_token is None:
                return {'status': 200, 'payload': {'message': 'o11y token not found for realm ' + str(realm)}}
            else:
                return {'status': 200, 'payload': {'message': 'o11y token deleted for realm ' + str(realm)}}
        else:
            return {'status': 405, 'payload': {'error': 'Method not allowed'}}

    def _get_realm_from_query_params(self, request):
        query = request.get('query')

        if query:
            realm_list = query[0]
            if realm_list[0] == 'realm' and len(realm_list) > 1:
                return realm_list[1]

        return None

    def handleStream(self, handle, in_string):
        raise NotImplementedError("PersistentServerConnectionApplication.handleStream")

    def done(self):
        pass
