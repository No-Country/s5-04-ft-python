from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
#
from apps.router.models import RouteModels
from apps.router.serializers import RouteSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class UserRouteViewset(ModelViewSet):
    serializer_class = RouteSerializer
    queryset = RouteModels.objects.all().order_by('-id')

    permission_classes = [IsAuthenticatedOrReadOnly]

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    # def create(self, request, *args, **kwargs):
    #     serializer = self.get_serializer(data=request.data)
    #     print(serializer)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_create(serializer)
    #     headers = self.get_success_headers(serializer.data)
    #     return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
#
#     # permission_classes = [IsAuthenticatedOrReadOnly]
#
    def create(self, request, *args, **kwargs):
        data = {
            "name_route": request.data['name_route'],
            "latitude": request.data['latitude'],
            "longitude": request.data['longitude'],
            "dificulty": request.data['dificulty'],
            "user_id": request.data['user_id'],
        }

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        print(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

