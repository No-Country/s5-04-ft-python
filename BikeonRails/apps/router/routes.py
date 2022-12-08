from rest_framework.routers import DefaultRouter
from apps.router.genericviews import UserRouteViewset

router = DefaultRouter()
router.register(r'route', UserRouteViewset, basename='route')

urlpatterns = router.urls