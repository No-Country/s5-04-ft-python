from django.contrib import admin
from group.models import Event, BikeGroups, Bicycle

# Register your models here.
admin.site.register(Event)
admin.site.register(BikeGroups)
admin.site.register(Bicycle)