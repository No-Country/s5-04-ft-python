from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from apps.group.models import GroupUsersRolModel
from apps.group.serializers import GroupUsersRolSerializer


class GroupsViewset(ModelViewSet):
    serializer_class = GroupUsersRolSerializer
    queryset = GroupUsersRolModel.objects.all().order_by('-id')

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    # def create(self, request, *args, **kwargs):
    #
    #     data = {
    #         'id': request.data['id']
    #     }
    #     serializer = self.get_serializer(data=data)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_create(serializer)
    #     headers = self.get_success_headers(serializer.data)
    #     return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

