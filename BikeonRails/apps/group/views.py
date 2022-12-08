from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.response import Response

from apps.group.models import GroupUsersRolModel, BikeGroupsModel
from apps.group.serializers import BikeGroupsAddSerializer, GroupUserAllSeralizer
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly


class ListUserGroup(ListAPIView):

    serializer_class = GroupUserAllSeralizer
    queryset = GroupUsersRolModel.objects.all()

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class AddUserView(CreateAPIView):

    serializer_class = BikeGroupsAddSerializer
    queryset = BikeGroupsModel.objects.all()

    permission_classes = [IsAuthenticatedOrReadOnly]

    def create(self, request, *args, **kwargs):
        data = {
            "usuario": request.user,

        }
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)




