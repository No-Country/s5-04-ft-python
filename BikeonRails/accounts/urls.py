from django.urls import path
from accounts.views import RegisterView, VerifyEmail
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('email-verify/', VerifyEmail.as_view(), name='email-verify'),
]