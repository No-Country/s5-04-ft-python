from django.contrib import admin

from accounts.models import User, PersonalInfo

admin.site.register(User)
admin.site.register(PersonalInfo)
