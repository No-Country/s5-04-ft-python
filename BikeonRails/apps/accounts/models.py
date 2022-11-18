from django.db import models
from apps.accounts.manager import MyUserManager
from django.contrib.auth.models import (
    AbstractBaseUser, PermissionsMixin)
from rest_framework_simplejwt.tokens import RefreshToken
from phonenumber_field.modelfields import PhoneNumberField


class InfoPerson(models.Model):
    blood_type = models.CharField(max_length=4)
    country = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    address = models.CharField(max_length=200, blank=True, null=True)
    phone_number = PhoneNumberField(unique=True, blank=True, null=True)

    def __str__(self) -> str:
        return self.blood_type


class User(AbstractBaseUser, PermissionsMixin):

    ROL_CHOICES = (
        ('Admin', 'admin'),
        ('User', 'User'),
    )

    username = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255, blank=True, null=True)
    image = models.ImageField(upload_to='group/', default='profile.png', blank=True, null=True)
    email = models.EmailField(max_length=255, unique=True, db_index=True)
    info_person = models.ForeignKey(InfoPerson, on_delete=models.CASCADE, blank=True, null=True)
    rol_user = models.CharField(max_length=5, choices=ROL_CHOICES, default=ROL_CHOICES[1][0])
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