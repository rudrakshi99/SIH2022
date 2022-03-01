from django.db import models
from kex.brand.models import Brand


class EquipmentType(models.Model):
    name = models.CharField(max_length=200)
    brand = models.ManyToManyField(Brand)

    def __str__(self):
        return self.name
