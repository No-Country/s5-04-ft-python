from rest_framework.routers import DefaultRouter
from apps.group.genericviews import GroupsViewset

router = DefaultRouter()
router.register(r'group', GroupsViewset, basename='group')

urlpatterns = router.urls

