import json
import pytest
from unittest.mock import patch
from pipeline_endpoint import PipelineManagerHandler

def test_handle_get_request():
    # Mock PipelineManager to simulate reading a pipeline
    with patch('pipeline_endpoint.PipelineManager') as mock_manager:
        mock_manager.read_pipeline.return_value = {"name": "mypipeline"}
        
        handler = PipelineManagerHandler(None, None)
        handler.manager = mock_manager
        
        # Simulate a GET request
        request_json = json.dumps({
            "method": "GET",
            "query": [["pipeline_name", "mypipeline"]],
            "payload": None,
            "session": {"authtoken": "dummytoken"}
        })
        response = handler.handle(request_json)
        
        # Verify the handler responds as expected
        assert response['status'] == 200
        assert json.loads(response['payload']) == {"name": "mypipeline"}