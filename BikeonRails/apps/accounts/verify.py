from apps.accounts.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from apps.accounts.utils import Util


def email_confirm(request, user_data):
    user = User.objects.get(email=user_data['email'])

    token = RefreshToken.for_user(user).access_token
    current_site = get_current_site(request).domain
    relativeLink = reverse('email-verify')
    absurl = 'http://' + current_site + relativeLink + "?token=" + str(token)
    email_body = f'Hi  {user.username} Use the link below to verify your email \n {absurl}'
    data = {'email_body': email_body, 'to_email': user.email, 'email_subject': 'Verify your email'}

    Util.send_email(data)