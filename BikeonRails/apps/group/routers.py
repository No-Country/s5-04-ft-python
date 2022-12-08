from rest_framework.routers import DefaultRouter
from django.urls import path
from apps.group.genericviews import GroupsViewset
from apps.group.views import AddUserView, ListUserGroup

router = DefaultRouter()
router.register(r'group', GroupsViewset, basename='group')


urlpatterns = router.urls

urlpatterns += [
    path('add-user/', AddUserView.as_view(), name="add-user"),
    path('list-all/', ListUserGroup.as_view(), name="list-all"),

]



