from django.contrib import admin
from kex.equipment_type.models import EquipmentType


class EquipmentTypeAdmin(admin.ModelAdmin):
    list_display = ["name"]
    list_filter = ["name"]
    search_fields = ["name", "brand__name"]

    class Meta:
        model = EquipmentType


admin.site.register(EquipmentType, EquipmentTypeAdmin)
