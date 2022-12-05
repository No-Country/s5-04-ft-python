from rest_framework import serializers

from apps.accounts.models import User
from apps.group.models import BikeGroupsModel, EventModel, GroupUsersRolModel, RolesModel


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ["id", "username"]


class RolesSerializer(serializers.ModelSerializer):

    class Meta:
        model = RolesModel
        fields = ["rol"]


class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = EventModel
        fields = '__all__'


class BikeGroupsSerializer(serializers.ModelSerializer):
    event = EventSerializer(read_only=True)
    user_member_id = UserSerializer(many=True)

    class Meta:
        model = BikeGroupsModel
        fields = ["user_member_id", "name_group", "description", "city", "image", "event"]


class GroupUsersRolSerializer(serializers.ModelSerializer):
    group_id = BikeGroupsSerializer(read_only=True)
    user_id = UserSerializer(read_only=True)
    rol_id = RolesSerializer(read_only=True)

    class Meta:
        model = GroupUsersRolModel
        fields = ["id", "user_id", "rol_id", "group_id"]