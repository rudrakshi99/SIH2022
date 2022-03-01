from django.contrib import admin
from kex.enquiry.models import HelpCentre

# Register your models here.
@admin.register(HelpCentre)
class HelpCentre(admin.ModelAdmin):
    list_display = ["name", "phone_number"]
    search_fields = list_display
