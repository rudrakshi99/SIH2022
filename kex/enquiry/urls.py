from django.urls import path
from kex.enquiry.api.views import HelpCentreView


app_name = "users"
urlpatterns = [
    path("help-centre", view=HelpCentreView.as_view(), name="help_centre"),
]
