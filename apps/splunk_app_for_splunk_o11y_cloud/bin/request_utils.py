import json
import re
from http import HTTPStatus
from http.client import HTTPException


class RequestValidationException(HTTPException):
    def __init__(self, message, status_code=HTTPStatus.BAD_REQUEST):
        super().__init__(status_code)
        self.status_code = status_code
        self.message = message


class InvalidRequestMethodException(RequestValidationException):
    def __init__(self, message='Http method not allowed'):
        super().__init__(message, status_code=HTTPStatus.METHOD_NOT_ALLOWED)


def is_graphql_path(path):
    # Make sure this path has the following criteria:
    # The path must start with at least one path segment before a /graphql.
    # The /graphql segment must come before any query params.
    # Query params are optional.
    return re.match(r'^(\/[a-zA-Z0-9._~-]+)+\/graphql(\?.+)?$', path) is not None


def is_graphql_request(request):
    return is_graphql_path(request.get('rest_path')) and request.get('method').upper() == 'POST'


def is_graphql_query(request):
    if not is_graphql_request(request):
        return False

    payload = json.loads(request.get('payload'))
    query = payload.get('query', '')

    return query.strip().lower().startswith('query') or query.strip().lower().startswith('fragment')


def is_graphql_mutation(request):
    if not is_graphql_request(request):
        return False

    payload = json.loads(request.get('payload'))
    query = payload.get('query', '')

    return query.strip().lower().startswith('mutation')


def is_metric_suggest_query(request):
    return (request.get('rest_path') == '/o11y/v2/suggest/_signalflowsuggest2' and
            request.get('method').upper() == 'POST')


def validate_request(request):
    if request.get('method') == 'GET' or is_graphql_query(request) or is_metric_suggest_query(request):
        return
    elif is_graphql_mutation(request):
        raise InvalidRequestMethodException('Graphql mutations are not allowed')
    else:
        raise InvalidRequestMethodException()
