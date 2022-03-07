from django.forms import ValidationError
from rest_framework import serializers
from kex.booking.models import Booking
from kex.enquiry.models import CancelForm, HelpCentre, PartnerDispute, ReportEquipment,FeedbackForm
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


class CancelFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = CancelForm
        exclude = ["user"]

    def create(self, validated_data):
        cancelform = CancelForm.objects.create(
            user=self.context["user"], **validated_data
        )

        booking = Booking.objects.filter(
            booking_id=validated_data.get("booking_id"), customer=self.context["user"]
        ).exclude(status="Cancelled")[0]
        booking.status = "Cancelled"
        booking.save()

        return cancelform

    def validate_booking_id(self, booking_id):
        if (
            not Booking.objects.filter(
                booking_id=booking_id, customer=self.context["user"]
            )
            .exclude(status="Cancelled")
            .exists()
        ):
            raise ValidationError("Booking Id doesn't exists for this user")

        return booking_id


class ReportEquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportEquipment
        exclude = ["user"]

    def create(self,validated_data):

        report_equipment = ReportEquipment.objects.create(user=self.context["user"],**validated_data)
        return report_equipment

class FeedbackFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackForm
        fields = "__all__"

