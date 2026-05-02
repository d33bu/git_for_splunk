#
# SPDX-FileCopyrightText: 2021 Splunk, Inc. <sales@splunk.com>
# SPDX-License-Identifier: LicenseRef-Splunk-8-2021
#
#
import logging
import traceback

import splunk.admin as admin
import splunk.clilib.cli_common as scc
import splunk_ta_gcp.legacy.common as gwc
import splunk_ta_gcp.legacy.config as gconf
import splunk_ta_gcp.legacy.consts as ggc
import splunktalib.common.pattern as scp
import splunktalib.common.util as scutil

logger = logging.getLogger()


PUBSUB_SCOPES = ["https://www.googleapis.com/auth/pubsub"]


class GooglePubSub:
    def __init__(self, config):
        """
        :param: config
        {
            "proxy_url": xxx,
            "proxy_port": xxx,
            "proxy_username": xxx,
            "proxy_password": xxx,
            "proxy_rdns": xxx,
            "proxy_type": xxx,
            "google_credentials": xxx,
            "google_project": xxx,
            "google_subscriptions": xxx,
            "google_topic": xxx,
            "batch_size": xxx,
            "base64encoded": True/False,
        }
        """

        self._config = config
        self._config["scopes"] = PUBSUB_SCOPES
        self._config["service_name"] = "pubsub"
        self._config["version"] = "v1"
        self._logger = logger
        self._client = gwc.create_google_client(self._config)
        self._base64encoded = scutil.is_true(self._config.get("base64encoded"))

    def _do_list(self, queryer, key):
        project_name = self._config["google_project"]
        project = "projects/{project}".format(project=project_name)
        result = []
        next_page_token = None

        try:
            while True:
                query = queryer.list(
                    project=project, pageSize=1000, pageToken=next_page_token
                )
                response = query.execute(num_retries=3)

                result.extend(response.get(key, []))

                next_page_token = response.get("nextPageToken")
                if not next_page_token:
                    break

        except Exception:
            self._logger.error(
                "Failed to list Google %s for project=%s, error=%s",
                key,
                project_name,
                traceback.format_exc(),
            )
        return result

    def subscriptions(self):
        """
        return a list of subscriptions
        {
        "topic": "projects/<project_id>/topics/<topic_name>",
        "ackDeadlineSeconds": 10,
        "pushConfig": {},
        "name": "projects/<project_id>/subscriptions/<subscript_name>"
        }
        """

        return self._do_list(self._client.projects().subscriptions(), "subscriptions")


class GoogleSubscriptions(admin.MConfigHandler):
    valid_params = [ggc.google_credentials_name, ggc.google_project]

    def setup(self):
        for param in self.valid_params:
            self.supportedArgs.addOptArg(param)

    @scp.catch_all(logger)
    def handleList(self, conf_info):
        logger.info("start listing google subscriptions")
        for required in self.valid_params:
            if not self.callerArgs or not self.callerArgs.get(required):
                logger.error('Missing "%s"', required)
                raise Exception('Missing "{}"'.format(required))

        stanza_name = self.callerArgs[ggc.google_credentials_name][0]
        config = gconf.get_google_settings(
            scc.getMgmtUri(), self.getSessionKey(), cred_name=stanza_name
        )

        project = self.callerArgs[ggc.google_project][0]
        config[ggc.google_project] = project
        ps = GooglePubSub(config)
        subscriptions = [sub["name"].split("/")[-1] for sub in ps.subscriptions()]
        for subscription in subscriptions:
            conf_info[subscription].append("subscriptions", subscription)
        logger.info("end of listing google subscriptions")


def main():
    admin.init(GoogleSubscriptions, admin.CONTEXT_NONE)
