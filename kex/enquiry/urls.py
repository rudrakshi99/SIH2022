from django.urls import path
from kex.enquiry.api.views import (
    CancelFormView,
    HelpCentreView,
    PartnerDisputeView,
    ReportEquipmentView,
    FeedbackFormView
)


app_name = "users"
urlpatterns = [
    path("help-centre", view=HelpCentreView.as_view(), name="help_centre"),
    path("partner-dispute", view=PartnerDisputeView.as_view(), name="partner_dispute"),
    path("cancel-form", view=CancelFormView.as_view(), name="cancel_form"),
    path(
        "report-equipment", view=ReportEquipmentView.as_view(), name="report_equipment"
    ),
    path(
        "feedback", view=FeedbackFormView.as_view(), name="feedback-form"
    ),
]
