"""Copyright (C) 2009-2023 Splunk Inc. All Rights Reserved."""
import base64
import sys

def setup_environment_for_modular_input():
    # Fix Protobuf issue when OS has installed protobuf c lib
    import os
    os.environ['PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION'] = 'python'

    # Add path to lib folder
    from splunk.clilib.bundle_paths import make_splunkhome_path
    sys.path.append(make_splunkhome_path(['etc', 'apps', 'splunk_secure_gateway', 'lib']))

    # Supress warning to splunkd
    import urllib3
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


def b64encode_to_str(string: bytes) -> str:
    """
    Creates a base 64 encoding.
    :param string: byte string
    :return: base64 encoded string
    """
    return base64.b64encode(string).decode('ascii')


def urlsafe_b64encode_to_str(string: bytes) -> str:
    """
    Creates a url safe base 64 encoding. Encodes the bytes object as a string
    :param string: byte string
    :return: base64 encoded url safe string
    """
    return base64.urlsafe_b64encode(string).decode('ascii')


def encode_hex_str(byte_string: bytes) -> str:
    """
    Encode byte string to hex
    :param byte_string: byte string
    :return: hex string
    """
    return byte_string.hex()


def encode_unicode_str(string):
    """ If string is python 2 unicode, return utf-8 encoded string, else just return string."""
    if sys.version_info < (3, 0) and isinstance(string, unicode):
        return string.encode('utf-8')

    if isinstance(string, str):
        return string

    raise TypeError("passed in value: {} is not a unicode or string value, it's a {}".format(string, type(string)))


def py2_check_unicode(string):
    """
    Check if string is unicode. In python 3 all strings are unicode.
    :param str:
    :return: boolean
    """

    if sys.version_info >= (3, 0) and isinstance(string, str):
        return True

    if sys.version_info < (3, 0) and isinstance(string, unicode):
        return True

    return False

def running_as_py3():
    return sys.version_info >= (3, 0)

def b64_to_urlsafe_b64(b64encoded_str):
    """Converts a b64 encoded str to its urlsafe counterpart"""

    raw_id = base64.b64decode(str(b64encoded_str))
    return urlsafe_b64encode_to_str(raw_id)

def urlsafe_b64_to_b64(urlsafe_b64encoded_str):
    """Converts an urlsafe b64 encoded str to its b64 encoded counterpart"""
    raw_id = base64.urlsafe_b64decode(str(urlsafe_b64encoded_str))
    return b64encode_to_str(raw_id)
