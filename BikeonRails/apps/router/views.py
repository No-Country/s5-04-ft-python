from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response

from apps.group.models import GroupUsersRolModel
from apps.group.serializers import BikeGroupsAddSerializer
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly


class AddUserView(CreateAPIView):

    serializer_class = BikeGroupsAddSerializer
    queryset = GroupUsersRolModel.objects.all()

    # permission_classes = [IsAuthenticatedOrReadOnly]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        group = serializer.save()
        user = self.request.user
        rol = self.request.data["False"]
        GroupUsersRolModel.objects.create(
            user_id=user,
            group_id=group,
            rol=rol,
        )
        serializer.save()
