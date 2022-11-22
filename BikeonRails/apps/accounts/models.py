from django.db import models
from apps.accounts.manager import MyUserManager
from django.contrib.auth.models import (
    AbstractBaseUser, PermissionsMixin)
from rest_framework_simplejwt.tokens import RefreshToken
from phonenumber_field.modelfields import PhoneNumberField


class BicycleModels(models.Model):

    class BikeColors(models.TextChoices):
        WHITE = 'WT', ('Blanco')
        BLACK = 'BK', ('Negro')
        RED = 'RD', ('Rojo')
        GREEN = 'GN', ('Verde')
        YELLOW = 'YW', ('Amarillo')
        BLUE = 'BL', ('AZUL')
        GREY = 'GR', ('Blanco')
        PINK = 'PK', ('Blanco')

    SIZE_CHOICES = (
        ('Small', 'Small'),
        ('Medium', 'Medium'),
        ('Large', 'Large'),
        ('XLarge', 'XLarge'),
    )

    brand = models.CharField(max_length=255)
    image = models.ImageField(upload_to='bicycle/', default='profile.png', blank=True, null=True)
    serial = models.CharField(unique=True, max_length=100)
    color = models.CharField(max_length=2, choices=BikeColors.choices, default=BikeColors.WHITE)
    size = models.CharField(max_length=6, choices=SIZE_CHOICES, default=SIZE_CHOICES[1][0])

    def __str__(self) -> str:
        return self.brand


class InfoPerson(models.Model):
    blood_type = models.CharField(max_length=4)
    country = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    address = models.CharField(max_length=200, blank=True, null=True)
    phone_number = PhoneNumberField(unique=True, blank=True, null=True)

    def __str__(self) -> str:
        return self.blood_type


class User(AbstractBaseUser, PermissionsMixin):

    username = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255, blank=True, null=True)
    image = models.ImageField(upload_to='group/', default='profile.png', blank=True, null=True)
    email = models.EmailField(max_length=255, unique=True, db_index=True)
    info_person = models.ForeignKey(InfoPerson, on_delete=models.CASCADE, blank=True, null=True)
    bicycle = models.ForeignKey(BicycleModels, on_delete=models.CASCADE, blank=True, null=True)
    manager = models.ForeignKey('self', related_name="user", on_delete=models.CASCADE, blank=True, null=True)

    is_verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = MyUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email

    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }