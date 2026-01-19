import sys
import json
from splunk.clilib.bundle_paths import make_splunkhome_path
from splunk.persistconn.application import PersistentServerConnectionApplication

sys.path.append(make_splunkhome_path(['etc', 'apps', 'splunk-visual-exporter', 'bin']))
sys.path.append(make_splunkhome_path(['etc', 'apps', 'splunk-visual-exporter', 'bin', 'modules']))

from http import HTTPStatus
from export_utils.rest.handler import RestHandler, HTTPResponse, HTTPResult
from export_utils.rest.request import HTTPRequest
from export_utils.chromium.engine import ChromiumEngine

class StudioHandler(RestHandler, PersistentServerConnectionApplication):
    def __init__(self, _command_line, _command_arg):
        super(PersistentServerConnectionApplication, self).__init__()

    def post(self, request: HTTPRequest):
        definition_string = request.form.get('definition')
        theme = request.form.get('theme', 'dark')
        timeout = request.form.get('timeout')
        if timeout is not None:
            timeout = int(timeout)
        screenshot_delay = request.form.get('screenshot_delay')
        if screenshot_delay is not None:
            screenshot_delay = int(screenshot_delay)
        definition = json.loads(definition_string)
        feature_flags = {}

        studioErrors = []
        engine = ChromiumEngine()
        image = engine.get_screenshot(definition, theme, feature_flags, studioErrors, timeout=timeout, screenshotDelay=screenshot_delay)

        if request.query.get('export_as') == 'html':
            return self.html_response(image)
        return self.json_response(image)


    def html_response(self, image: str):
        html = "<html><body><img src='{}' /></body></html>".format(image)
        return HTTPResponse(
            HTTPStatus.OK,
            HTTPResult.OK,
            {
                'Content-Type': 'text/html'
            },
            html,
            True
        ) 
    
    def json_response(self, image: str):
        return HTTPResponse(
            HTTPStatus.OK,
            HTTPResult.OK,
            {
                'Content-Type': 'application/json'
            },
            {
                'meta': {
                    'type': 'png',
                },
                'contents': image
            },
        )

    def get(self, request: HTTPRequest):
        return HTTPResponse(
            HTTPStatus.OK,
            HTTPResult.OK,
            {},
            {
                'message': 'successful',
            },
        )