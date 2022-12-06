from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from apps.group.models import BikeGroupsModel, GroupUsersRolModel
from apps.group.serializers import BikeGroupsSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class GroupsViewset(ModelViewSet):
    serializer_class = BikeGroupsSerializer
    queryset = BikeGroupsModel.objects.all().order_by('-id')

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
        group = serializer.save()
        user = self.request.user
        GroupUsersRolModel(
            user_id=user,
            group_id=group
        )
        serializer.save()

