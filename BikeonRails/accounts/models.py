from django.db import models
from accounts.manager import MyUserManager
from django.contrib.auth.models import (
    AbstractBaseUser, PermissionsMixin)
from rest_framework_simplejwt.tokens import RefreshToken



#Personal info 
class PersonalInfo(models.Model):
    blood_type = models.CharField(max_length=4)
    country = models.CharField(max_length=255, null=True)
    city = models.CharField(max_length=255, null=True)
    address = models.CharField(max_length=255, null=True)
    

    def __str__(self) -> str:
        return self.country

#User
class User(AbstractBaseUser, PermissionsMixin):

    username = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True, db_index=True)
    picture = models.ImageField('foto group',upload_to='group/', null=False, blank=True, default='profile.png')
    personal_info = models.ForeignKey(PersonalInfo, on_delete=models.CASCADE, blank=True, null=True)
    
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










