from django.urls import path
from kex.enquiry.api.views import HelpCentreView, PartnerDisputeView


app_name = "users"
urlpatterns = [
    path("help-centre", view=HelpCentreView.as_view(), name="help_centre"),
    path("partner-dispute", view=PartnerDisputeView.as_view(), name="partner_dispute"),
]
