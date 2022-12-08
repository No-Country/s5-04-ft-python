from rest_framework.routers import DefaultRouter
from django.urls import path
from apps.group.genericviews import GroupsViewset
# from apps.router.views import AddUserView

router = DefaultRouter()
router.register(r'group', GroupsViewset, basename='group')


urlpatterns = router.urls

urlpatterns += [
    # path('add-group/', AddUserView.as_view(), name="add-group"),

]



