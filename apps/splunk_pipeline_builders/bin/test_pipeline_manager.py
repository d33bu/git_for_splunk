import pytest
from unittest.mock import Mock
from pipeline_endpoint import PipelineManager

@pytest.fixture
def pipeline_manager():
    # Mock the ConfManager used by PipelineManager
    conf_manager_mock = Mock()
    # Return a mock list that simulates the presence of the pipeline configuration file.
    conf_manager_mock.list_conf_files.return_value = '{"entry": [{"name": "pipeline"}]}'
    
    # Initialize PipelineManager with the mocked ConfManager
    return PipelineManager("example.com", "8089", "pipeline", "admin", "pass", conf_manager_mock)

def test_create_or_update_pipeline(pipeline_manager):
    # Prepare the mock to simulate a successful update
    pipeline_manager.conf_manager.update_stanza_content.return_value = True
    
    # Test creating or updating a pipeline
    result = pipeline_manager.create_or_update_pipeline("mypipeline", {"key": "value"})
    
    # Verify the method behaves as expected
    assert result == True
    pipeline_manager.conf_manager.add_stanza.assert_called_once_with("pipeline", "mypipeline")
    pipeline_manager.conf_manager.update_stanza_content.assert_called_once()
