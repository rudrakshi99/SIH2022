import logging
from random import randint
from twilio.rest import Client

logger = logging.getLogger()


def send_otp(phone_number):
    account_sid = "ACd462661af82547ee8b5b4d231f681277"
    auth_token = "f254ed32e243b0ed570f1227c849f0a7"
    client = Client(account_sid, auth_token)
    otp = randint(1001, 9999)
    message = client.messages.create(
        messaging_service_sid="MGd996b2344659f4183eba707589539cf2",
        body=f"OTP is {otp}",
        to=f"+91{phone_number}",
    )

    return otp


def response(success: bool, data=None, msg=None):
    if success:
        return {"success": True, "message": msg, "data": data}
    else:
        return {
            "success": False,
            "message": msg,
        }