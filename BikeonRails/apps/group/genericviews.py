from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .models import BikeGroupsModel
from .serializers import GroupsSerializer
from collections import defaultdict
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class GroupsViewset(ModelViewSet):
    serializer_class = GroupsSerializer
    queryset = BikeGroupsModel.objects.all()
        
    #permission_classes=[IsAuthenticatedOrReadOnly] - 
    
    @swagger_auto_schema(operation_summary="List Groups")
    
    def get(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = GroupsSerializer(queryset, many=True)
        return Response(serializer.data)
    
    
    
    #def list(self, request, *args, **kwargs):
    #    queryset =self.get_queryset()
    #    
    #    serializer = self.get_serializer(queryset, many=True)
    #   
    #    return Response(serializer)