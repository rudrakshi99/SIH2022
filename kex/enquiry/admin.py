from django.contrib import admin
from kex.enquiry.models import HelpCentre,FeedbackForm,PartnerDispute,CancelForm,ReportEquipment

# Register your models here.
@admin.register(HelpCentre)
class HelpCentre(admin.ModelAdmin):
    list_display = ["name", "phone_number"]
    search_fields = list_display

@admin.register(PartnerDispute)
class PartnerDisputeForm(admin.ModelAdmin):
    list_display = ["name", "phone_number","equipment_id","partner_id"]
    search_fields = list_display

@admin.register(CancelForm)
class CancelFormForm(admin.ModelAdmin):
    list_display = ["user", "booking_id","cancel_reason"]
    search_fields = list_display


@admin.register(ReportEquipment)
class ReportEquipmentForm(admin.ModelAdmin):
    list_display = ["user", "equipment","report_reason"]
    search_fields = list_display

@admin.register(FeedbackForm)
class FeedbackForm(admin.ModelAdmin):
    list_display = ["name", "phone_number","description"]
    search_fields = list_display
