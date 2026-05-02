#
# SPDX-FileCopyrightText: 2021 Splunk, Inc. <sales@splunk.com>
# SPDX-License-Identifier: LicenseRef-Splunk-8-2021
#
#
import json

import google.auth


class CredentialFactory:
    def __init__(self, config):
        self._config = config
        self._collection = "splunk_ta_google/google_credentials"

    def get_stanza(self, stanza=""):
        content = self._config.load(
            self._collection, stanza=stanza, virtual=True, clear_cred=True
        )
        return content

    def load(self, profile, scopes):
        content = self._config.load(
            self._collection, stanza=profile, virtual=True, clear_cred=True
        )
        content["scopes"] = scopes
        return self.get_credential(content)

    @staticmethod
    def get_credential(config):
        """
        Get credential of any account_type and create a credential
        object
        """
        google_cred = config.get("google_credentials")
        scopes = config.get("scopes")
        adc_account = config.get("adc_account", "0")

        # Check if this is an ADC account
        if str(adc_account) == "1":
            credential, _ = google.auth.default(scopes=scopes)
            return credential

        if isinstance(google_cred, str):
            google_cred = json.loads(google_cred)

        if google_cred:
            credential, _ = google.auth.load_credentials_from_dict(
                google_cred, scopes=scopes
            )
        else:
            raise Exception(f"Please supply valid service/external account JSON.")

        return credential
