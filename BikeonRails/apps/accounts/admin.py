from django.contrib import admin

from apps.accounts.models import User, InfoPerson,BicycleModels

admin.site.register(User)
admin.site.register(InfoPerson)
admin.site.register(BicycleModels)
