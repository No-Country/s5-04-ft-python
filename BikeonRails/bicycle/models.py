from django.db import models
from accounts.models import User


# Create your models here.
class Bicycle(models.Model):
    brand = models.CharField(max_length=255)
    picture = models.ImageField('imagen bicicleta',upload_to="bicycle/", null=True, blank=True)
    serial_number = models.CharField(max_length=255)
    color = models.CharField(max_length=255)
    size = models.CharField(max_length=255)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)


    def __str__(self):
        return self.brand


    class meta:
        verbose_name = 'Bicycle'
        verbose_name_plural = 'Bicycles'
