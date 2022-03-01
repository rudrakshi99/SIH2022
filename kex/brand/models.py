from django.db import models

from kex.equipment_type.models import EquipmentType


class Brand(models.Model):

    name = models.CharField(max_length=200)
    equipment_type = models.ManyToManyField(EquipmentType)

    def __str__(self):
        return self.name
