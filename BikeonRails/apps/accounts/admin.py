from django.contrib import admin

from apps.accounts.models import User, InfoPerson

admin.site.register(User)
admin.site.register(InfoPerson)
