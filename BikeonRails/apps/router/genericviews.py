from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
#
from apps.router.models import RouteModels, UserRouterModels
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

    def create(self, request, *args, **kwargs):

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        route = serializer.save()
        user = self.request.user
        UserRouterModels.objects.create(
            route_id=route,
            user_id=user
        )
        serializer.save()
