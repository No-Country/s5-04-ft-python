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
