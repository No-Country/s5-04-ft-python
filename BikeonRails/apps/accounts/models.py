from django.db import models
from apps.accounts.manager import MyUserManager
from django.contrib.auth.models import (
    AbstractBaseUser, PermissionsMixin)
from rest_framework_simplejwt.tokens import RefreshToken
from apps.info.models import InfoPerson, BicycleModels


class User(AbstractBaseUser, PermissionsMixin):

    username = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255, blank=True, null=True)
    image = models.ImageField(upload_to='group/', default='profile.png', blank=True, null=True)
    email = models.EmailField(max_length=255, unique=True, db_index=True)
    manager = models.ForeignKey('self', related_name="user", on_delete=models.CASCADE, blank=True, null=True)

    is_verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    info_person = models.ForeignKey(InfoPerson, on_delete=models.CASCADE, blank=True, null=True)
    bicycle = models.ForeignKey(BicycleModels, on_delete=models.CASCADE, blank=True, null=True)
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