from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status


from kex.core.utils import response_payload
from kex.enquiry.models import HelpCentre
from kex.enquiry.api.serializers import HelpCentreSerializer


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