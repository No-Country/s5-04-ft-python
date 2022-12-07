from django.contrib import admin
#
from apps.router.models import RouteModels, UserRouterModels

#
admin.site.register(RouteModels)
admin.site.register(UserRouterModels)
