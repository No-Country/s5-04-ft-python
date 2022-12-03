from rest_framework.routers import DefaultRouter

from .genericviews import GroupsViewset

router = DefaultRouter()
router.register(r'groups', GroupsViewset, basename='groups')
