from django.urls import path
from kex.users.api.views import UserRetrieveUpdateView
from kex.users.api.viewset import (
    LoginVerifyOtpViewset,
    LoginViewset,
    SignUpViewset,
    LoginOtpViewset,
)


app_name = "users"
urlpatterns = [
    path("signup/", view=SignUpViewset.as_view({"post": "signup"}), name="signup"),
    path(
        "signup/verify-otp",
        view=SignUpViewset.as_view({"post": "signup_verify_otp"}),
        name="signup_verify_otp",
    ),
    path(
        "login/email",
        view=LoginViewset.as_view({"post": "email_login"}),
        name="email_login",
    ),
    path(
        "login/otp",
        view=LoginOtpViewset.as_view({"post": "otp_login"}),
        name="otp_login",
    ),
    path(
        "login/verify-otp",
        view=LoginVerifyOtpViewset.as_view({"post": "verify_otp_login"}),
        name="verify_otp_login",
    ),
    path(
        "<slug:uuid>/",
        view=UserRetrieveUpdateView.as_view(),
        name="user_update",
    ),
]
