import logging

logger = logging.getLogger()


def response_payload(success: bool, data=None, msg=None):
    if success:
        return {"success": True, "message": msg, "data": data}
    else:
        return {
            "success": False,
            "message": msg,
        }
