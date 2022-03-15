# third party imports
from rest_framework_csv import renderers


class LOCATION_BASES_CSV_RENDER(renderers.CSVRenderer):
    header = ["user_uuid", "latitude", "longitude", "pincode", "equipment_id"]
