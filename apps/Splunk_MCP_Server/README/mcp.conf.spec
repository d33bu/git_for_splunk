# mcp.conf.spec
# Configuration specification for MCP (Model Context Protocol) server

[server]
* This stanza configures the MCP server settings

timeout = <float>
* Timeout in seconds for requests to Splunk
* Default: 60.0
* Range: 1.0-300.0

max_row_limit = <integer>
* The maximum number of rows that can be returned in a single search query
* Default: 1000
* Range: 1-1000000

default_row_limit = <integer>
* The default maximum number of rows to return in a search query when not specified
* Default: 100
* Range: 1-1000000

ssl_verify = <string|boolean>
* Whether to verify SSL certificates for outgoing HTTPS requests
* Default: true

require_encrypted_token = <boolean>
* Whether bearer tokens must be RSA-encrypted with the server public key.
* If true, non-decryptable tokens are rejected (401). If false, non-decryptable accepted.
* Default: true
