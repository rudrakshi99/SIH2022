from django.forms import ValidationError
from rest_framework import serializers
from kex.enquiry.models import HelpCentre, PartnerDispute
from kex.equipment.models import Equipment
from kex.users.models import User


class HelpCentreSerializer(serializers.ModelSerializer):
    class Meta:
        model = HelpCentre
        fields = "__all__"


class PartnerDisputeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartnerDispute
        fields = "__all__"

    def validate_partner_id(self, partner_id):
        if not User.objects.filter(user_id=partner_id).exists():
            raise ValidationError("Partner doesn't exists")

        return partner_id

    def validate_equipment_id(self, equipment_id):
        if not Equipment.objects.filter(eq_id=equipment_id).exists():
            raise ValidationError("Equipment ID doesn't exists")

        return equipment_id