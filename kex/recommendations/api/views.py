import pgeocode

from rest_framework.views import APIView
from rest_framework.response import Response
from kex.equipment.models import Equipment

from kex.recommendations.api.renderer import LOCATION_BASES_CSV_RENDER
from kex.users.models import User


class LocationBasedRecommendationView(APIView):
    renderer_classes = [LOCATION_BASES_CSV_RENDER]

    def get(self, request, *args, **kwargs):
        content = []
        nomi = pgeocode.Nominatim("in")
        for equipment in Equipment.objects.all().select_related("owner"):
            location = nomi.query_postal_code(equipment.owner.pin_code)
            d = {
                "user_uuid": equipment.owner.uuid,
                "pincode": equipment.owner.pin_code,
                "latitude": location.latitude,
                "longitude": location.longitude,
                "equipment_id": equipment.eq_id,
            }
            content.append(d)

        return Response(content)
