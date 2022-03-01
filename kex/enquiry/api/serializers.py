from rest_framework import serializers
from kex.enquiry.models import HelpCentre


class HelpCentreSerializer(serializers.ModelSerializer):
    class Meta:
        model = HelpCentre
        fields = "__all__"