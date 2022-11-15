from django.contrib import admin

from accounts.models import User, Address

admin.site.register(User)
admin.site.register(Address)
