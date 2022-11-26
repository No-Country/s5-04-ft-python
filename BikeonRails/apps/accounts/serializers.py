from rest_framework import serializers
from django.contrib import auth
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import RefreshToken, TokenError

from django.utils.encoding import force_str
from django.utils.http import urlsafe_base64_decode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from apps.accounts.models import User


from django.core.exceptions import ValidationError
from django.utils.translation import gettext as _
import re


class RegisterSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(
        style={"input_type"}, min_length=1, max_length=12, write_only=True
    )

    class Meta:
        model = User
        fields = ["id", "username", "email", "password", "password2"]
        extra_kwargs = {"password": {"write_only": True}}

    def save(self):
        user = User(
            email=self.validated_data["email"],
            username=self.validated_data["username"],
        )
        password = self.validated_data["password"]
        password2 = self.validated_data["password2"]

        if password != password2:
            raise serializers.ValidationError({"password": "Passwords must match."})

        # minlength
        try:
            if len(password) < 5:
                raise ValidationError(                                                
            )
        except Exception as e:
            raise AuthenticationFailed("This password must contain at least 5 characters.", 400)

        #Uppercase
        try:
            if not re.findall('[A-Z]', password):
                raise ValidationError(                                                
            )
        except Exception as e:
            raise AuthenticationFailed("The password must contain at least 1 uppercase letter, A-Z.", 400)
        
        #numbers
        try:
            if not re.findall('\d', password):
                raise ValidationError(                                                
            )
        except Exception as e:
            raise AuthenticationFailed("The password must contain at least 1 digit, 0-9.", 400)               
             
        
        user.set_password(password)
        user.save()
        return user


class EmailVerificationSerializer(serializers.ModelSerializer):
    token = serializers.CharField(max_length=555)

    class Meta:
        model = User
        fields = ["token"]


class ResetPasswordEmailRequestSerializer(serializers.Serializer):
    email = serializers.EmailField(min_length=2)

    class Meta:
        fields = ["email"]


class SetNewPasswordSerializer(serializers.Serializer):

    password = serializers.CharField(min_length=3, max_length=68, write_only=True)
    token = serializers.CharField(min_length=1, write_only=True)
    uidb64 = serializers.CharField(min_length=1, write_only=True)

    class Meta:
        fields = ["password", "token", "uidb64"]

    def validate(self, attrs):
        try:
            password = attrs.get("password")
            token = attrs.get("token")
            uidb64 = attrs.get("uidb64")

            id = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                raise AuthenticationFailed("The reset link is invalid", 401)

            user.set_password(password)
            user.save()

            return user
        except Exception as e:
            raise AuthenticationFailed("The reset link is invalid", 401)
        return super().validate(attrs)


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255, min_length=3)
    password = serializers.CharField(max_length=255, min_length=3, write_only=True)
    username = serializers.CharField(max_length=255, min_length=3, read_only=True)
    tokens = serializers.SerializerMethodField()

    def get_tokens(self, obj):

        user = User.objects.get(email=obj["email"])
        return {
            "access": user.tokens()["access"],
            "refresh": user.tokens()["refresh"],
        }

    class Meta:
        model = User
        fields = ["id", "email", "password", "username", "tokens"]

    def validate(self, attrs):
        email = attrs.get("email", "")
        password = attrs.get("password", "")

        user = auth.authenticate(email=email, password=password)
        if not user:
            raise AuthenticationFailed("Invalid credentials, try again")
        if not user.is_active:
            raise AuthenticationFailed("Account disables, contact admin")
        if not user.is_verified:
            raise AuthenticationFailed("Email is not verified")

        return {
            "id": user.id,
            "email": user.email,
            "username": user.username,
            "tokens": user.tokens(),
        }

        return super(LoginSerializer, self).validate()


class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()

    default_error_message = {"bad_token": ("Token is expired or invalid")}

    def validate(self, attrs):
        self.token = attrs["refresh"]
        return attrs

    def save(self, **kwargs):
        try:
            RefreshToken(self.token).blacklist()
        except TokenError:
            self.fail("bad_token")
