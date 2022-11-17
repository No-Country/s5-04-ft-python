from django.contrib import admin

<<<<<<< HEAD:BikeonRails/accounts/admin.py
from accounts.models import User, PersonalInfo
=======
from apps.accounts.models import User
>>>>>>> fb2b5f70b439ea22f103a2a8adabafc0fe33dc8c:BikeonRails/apps/accounts/admin.py

admin.site.register(User)
admin.site.register(PersonalInfo)
