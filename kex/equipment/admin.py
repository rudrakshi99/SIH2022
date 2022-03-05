from django.contrib import admin
from kex.equipment.models import Equipment, EquipmentRating


class EquipmentAdmin(admin.ModelAdmin):
    list_display = ["title", "owner", "created_at"]
    list_filter = ["owner", "created_at", "title"]
    search_fields = ["title", "owner", "description"]

    class Meta:
        model = Equipment


admin.site.register(Equipment, EquipmentAdmin)
admin.site.register(EquipmentRating)
