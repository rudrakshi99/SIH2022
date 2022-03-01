# Django imports
from django.db import models
from django.utils.translation import ugettext_lazy as _

# Third party imports


class HelpCentre(models.Model):
    name = models.CharField(_("Name"), max_length=50, blank=False)
    email = models.EmailField(_("Email"), blank=True, null=True)
    phone_number = models.CharField(
        _("Phone Number"),
        max_length=10,
    )
    title = models.CharField(_("Title"), max_length=50, blank=True)
    reason = models.TextField(_("Enquiry Reason"), blank=False)

    def __str__(self):
        return str(self.name)
