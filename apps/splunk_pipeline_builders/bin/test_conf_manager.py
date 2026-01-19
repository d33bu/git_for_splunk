import pytest
import requests_mock
from pipeline_endpoint import ConfManager

@pytest.fixture
def conf_manager():
    """Fixture to create a ConfManager instance with a predefined configuration."""
    return ConfManager("example.com", "8089", "admin", "pass", None)

def test_create_config_file(requests_mock, conf_manager):
    # Simulate a successful POST request to the server.
    requests_mock.post("https://example.com:8089/services/properties", status_code=201)
    
    # Invoke the method under test.
    conf_manager.create_config_file("testfile")
    
    # Assertions to verify that the request was made as expected.
    assert requests_mock.called
    assert requests_mock.last_request.json() == {"__conf": "testfile"}






