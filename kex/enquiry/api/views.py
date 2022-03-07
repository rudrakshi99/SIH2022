from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from kex.booking.models import Booking


from kex.core.utils import response_payload
from kex.enquiry.models import CancelForm, HelpCentre, PartnerDispute, ReportEquipment,FeedbackForm
from kex.enquiry.api.serializers import (
    HelpCentreSerializer,
    PartnerDisputeSerializer,
    CancelFormSerializer,
    ReportEquipmentSerializer,
    FeedbackFormSerializer
)


class HelpCentreView(generics.CreateAPIView):
    queryset = HelpCentre.objects.all()
    serializer_class = HelpCentreSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        validated_data = serializer.validated_data
        help_centre = serializer.create(validated_data)

        help_centre = HelpCentreSerializer(help_centre).data

        return Response(
            response_payload(
                success=True, data=help_centre, msg="Your Request Has been raised."
            ),
            status=status.HTTP_200_OK,
        )


class PartnerDisputeView(generics.CreateAPIView):
    queryset = PartnerDispute.objects.all()
    serializer_class = PartnerDisputeSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        validated_data = serializer.validated_data
        partner_dispute = serializer.create(validated_data)

        partner_dispute = PartnerDisputeSerializer(partner_dispute).data

        return Response(
            response_payload(
                success=True, data=partner_dispute, msg="Your Request Has been raised."
            ),
            status=status.HTTP_200_OK,
        )


class CancelFormView(generics.CreateAPIView):
    queryset = CancelForm.objects.all()
    serializer_class = CancelFormSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data, context={"user": request.user}
        )
        serializer.is_valid(raise_exception=True)
        validated_data = serializer.validated_data
        cancel_form = serializer.create(validated_data)
        cancel_form = CancelFormSerializer(cancel_form).data

        return Response(
            response_payload(
                success=True, data=cancel_form, msg="Your Booking has been cancelled"
            ),
            status=status.HTTP_200_OK,
        )


class ReportEquipmentView(generics.CreateAPIView):
    queryset = ReportEquipment.objects.all()
    serializer_class = ReportEquipmentSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,context={"user": request.user})
        serializer.is_valid(raise_exception=True)
        validated_data = serializer.validated_data
        report_equipment = serializer.create(validated_data)

        report_equipment = ReportEquipmentSerializer(report_equipment).data

        return Response(
            response_payload(
                success=True, data=report_equipment, msg="Your Request Has been raised."
            ),
            status=status.HTTP_200_OK,
        )


class FeedbackFormView(generics.CreateAPIView):
    queryset = FeedbackForm.objects.all()
    serializer_class = FeedbackFormSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        validated_data = serializer.validated_data
        feedback_form = serializer.create(validated_data)

        feedback_form = FeedbackFormSerializer(feedback_form).data

        return Response(
            response_payload(
                success=True, data=feedback_form, msg="Thanks for the feedback."
            ),
            status=status.HTTP_200_OK,
        )
