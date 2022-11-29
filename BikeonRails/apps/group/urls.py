from django.urls import path
from .genericviews import GroupsViewset
from .routers import router

urlpatterns = [
    #path('grupos2/', GroupsViewset.as_view(), name='grupos2'),
]
urlpatterns += router.urls