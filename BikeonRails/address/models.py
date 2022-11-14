from django.db import models
from accounts.models import User

# Create your models here.
class Address(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    country = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    address = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.country


    class meta:
        verbose_name = 'Address'
        verbose_name_plural='Adresses'

    