from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from apps.router.models import UserRouterModels
from apps.router.serializers import UserRouteSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class UserRouteViewset(ModelViewSet):
    serializer_class = UserRouteSerializer
    queryset = UserRouterModels.objects.all().order_by('-id')

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    # permission_classes = [IsAuthenticatedOrReadOnly]

    def create(self, request, *args, **kwargs):
        data = {
            'username': request.data['username'],
            'name_route': request.data['name_route'],
            "distance": request.data['distance'],
            "time": request.data['time'],
            "dificulty": request.data['dificulty'],
            "latitude": request.data['latitude'],
            "longitude": request.data['longitude'],
        }

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
