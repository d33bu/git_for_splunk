#
# SPDX-FileCopyrightText: 2021 Splunk, Inc. <sales@splunk.com>
# SPDX-License-Identifier: LicenseRef-Splunk-8-2021
#
#
import json

import splunk.admin as admin
from splunk.rest import makeSplunkdUri
from splunktalib.common import util
from splunktalib.rest import splunkd_request
from splunktaucclib.rest_handler import base
from splunktaucclib.rest_handler.endpoint import validator
from splunktaucclib.rest_handler.error_ctl import RestHandlerError as RH_Err
from splunktalib.conf_manager.conf_manager import ConfManager
import splunk.clilib.cli_common as scc
from solnlib.server_info import ServerInfo
import google.auth
import splunk_ta_gcp.legacy.common as gwc
from .BaseRestHandlerWrapper import BaseRestHandlerWrapper

util.remove_http_proxy_env_vars()


class ADCAccountDeletionError(Exception):
    """Custom exception for when trying to delete an ADC account"""

    pass


class ADCAccountModificationError(Exception):
    """Custom exception for when trying to modify an ADC account"""

    pass


class GoogleCredentials(base.BaseModel):
    """REST Endpoint of Server in Splunk Add-on UI Framework."""

    rest_prefix = "google"
    endpoint = "configs/conf-google_cloud_credentials"
    requiredArgs = {"account_type", "google_credentials"}
    optionalArgs = {"adc_account"}
    encryptedArgs = {"google_credentials"}
    validators = {"google_credentials": validator.JsonString()}
    outputExtraFields = (
        "eai:acl",
        "acl",
        "eai:attributes",
        "eai:appName",
        "eai:userName",
    )
    cap4endpoint = ""
    cap4get_cred = ""


class GoogleCredentialsHandler(BaseRestHandlerWrapper):

    _depended_endpoints = [
        {
            "endpoint": "splunk_ta_google/google_inputs_billing",
            "description": "Billing Input",
            "fields": ["google_credentials_name"],
        },
        {
            "endpoint": "splunk_ta_google/google_inputs_monitoring",
            "description": "Monitoring Input",
            "fields": ["google_credentials_name"],
        },
        {
            "endpoint": "splunk_ta_google/google_inputs_pubsub",
            "description": "Pub/Sub Input",
            "fields": ["google_credentials_name"],
        },
        {
            "endpoint": "splunk_ta_google/google_inputs_pubsub_lite",
            "description": "Pub/Sub Lite Input",
            "fields": ["google_credentials_name"],
        },
        {
            "endpoint": "splunk_ta_google/google_inputs_resource_metadata",
            "description": "Resource Metadata",
            "fields": ["google_credentials_name"],
        },
        {
            "endpoint": "splunk_ta_google/google_inputs_storage_buckets",
            "description": "Cloud Bucket Input",
            "fields": ["google_credentials_name"],
        },
        {
            "endpoint": "splunk_ta_google/google_inputs_resource_metadata_cloud_storage",
            "description": "Resource Metadata Cloud Storage",
            "fields": ["google_credentials_name"],
        },
        {
            "endpoint": "splunk_ta_google/google_inputs_resource_metadata_vpc_access",
            "description": "Resource Metadata VPC Access",
            "fields": ["google_credentials_name"],
        },
        {
            "endpoint": "splunk_ta_google/google_inputs_resource_metadata_kubernetes",
            "description": "Resource Metadata Kubernetes",
            "fields": ["google_credentials_name"],
        },
        {
            "endpoint": "splunk_ta_google/google_inputs_pubsub_based_bucket",
            "description": "Cloud Pub/Sub Based Bucket Input",
            "fields": ["google_credentials_name"],
        },
    ]

    def _check_adc_account_operation(self, account_name, operation="delete"):
        """
        Check if the account is an ADC account and validate the operation.

        Args:
            account_name (str): The account name to check
            operation (str): The operation being performed ("delete" or "modify")

        Raises:
            ADCAccountDeletionError: If trying to delete an ADC account
            ADCAccountModificationError: If trying to modify an ADC account
        """
        if not account_name or not account_name.startswith("adc_account_"):
            return

        sessionKey = self.getSessionKey()
        server_uri = scc.getMgmtUri()
        cm = ConfManager(
            server_uri, sessionKey, "nobody", "Splunk_TA_google-cloudplatform"
        )

        if cm.stanza_exist("google_cloud_credentials", account_name):
            stanza_data = cm.get_stanza("google_cloud_credentials", account_name)
            auto_discovered_flag = stanza_data.get("adc_account", "0")

            if str(auto_discovered_flag) == "1":
                if operation == "delete":
                    raise ADCAccountDeletionError(
                        "Cannot delete ADC account '{}'.".format(account_name)
                    )
                elif operation == "modify":
                    raise ADCAccountModificationError(
                        "Cannot modify ADC account '{}'.".format(account_name)
                    )

    def handleList(self, confInfo):
        sessionKey = self.getSessionKey()
        server_uri = scc.getMgmtUri()
        server_info = ServerInfo.from_server_uri(server_uri, sessionKey)
        log_file_name = (
            "splunk_ta_google_cloudplatform_google_cloud_resthandler_credentials"
        )
        logger = gwc.set_logger(scc.getMgmtUri(), self.getSessionKey(), log_file_name)
        if not server_info.is_cloud_instance():
            try:
                credential, project_id = google.auth.default()
                logger.debug(
                    f"Found default credentials for project. project_id={project_id}."
                )
            except google.auth.exceptions.DefaultCredentialsError as exc:
                logger.debug(f"No default credentials found.")
                credential, project_id = None, None

            if credential and project_id:
                cm = ConfManager(
                    server_uri, sessionKey, "nobody", "Splunk_TA_google-cloudplatform"
                )
                name = "adc_account_" + project_id
                if not cm.stanza_exist("google_cloud_credentials", name):
                    account_ext = {
                        "google_credentials": "{}",
                        "adc_account": "1",
                        "account_type": "service_account",
                    }
                    cm.create_stanza("google_cloud_credentials", name, account_ext)
                    logger.info(
                        f"Created ADC account for the project. project_id={project_id}, account_name={name}."
                    )
                else:
                    logger.debug(
                        f"ADC account already exists. name={name}, project_id={project_id}."
                    )
        super(GoogleCredentialsHandler, self).handleList(confInfo)

    def make_endpoint_url(self, endpoint):
        user, app = self.user_app()
        return (
            makeSplunkdUri().strip("/")
            + "/servicesNS/"
            + user
            + "/"
            + app
            + "/"
            + endpoint.strip("/")
        )

    def check_entries(self, endpoint, entries):
        for ent in entries:
            name, ent = ent["name"], ent["content"]
            for field in endpoint["fields"]:
                val = ent.get(field)
                if isinstance(val, str):
                    val = [val]
                if self.callerArgs.id in val:
                    RH_Err.ctl(
                        400,
                        'It is still used in %s "%s"'
                        "" % (endpoint["description"], name),
                    )

    def handleEdit(self, confInfo):
        try:
            account_name = self.callerArgs.id
            self._check_adc_account_operation(account_name, operation="modify")
        except ADCAccountModificationError as exc:
            RH_Err.ctl(400, str(exc))
        super(GoogleCredentialsHandler, self).handleEdit(confInfo)

    def handleRemove(self, confInfo):
        try:
            account_name = self.callerArgs.id
            self._check_adc_account_operation(account_name, operation="delete")

            for ep in self._depended_endpoints:
                url = self.make_endpoint_url(ep.get("endpoint"))
                resp = splunkd_request(
                    url, self.getSessionKey(), data={"output_mode": "json"}
                )
                if resp.status_code not in (200, "200"):
                    raise Exception(resp)
                res = resp.json()
                self.check_entries(ep, res["entry"])

        except ADCAccountDeletionError as exc:
            RH_Err.ctl(400, str(exc))
        except Exception as exc:
            RH_Err.ctl(1105, exc)

        super(GoogleCredentialsHandler, self).handleRemove(confInfo)


def main():
    admin.init(
        base.ResourceHandler(
            GoogleCredentials,
            handler=GoogleCredentialsHandler,
        ),
        admin.CONTEXT_APP_AND_USER,
    )
