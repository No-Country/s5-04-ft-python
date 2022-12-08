from rest_framework import serializers

from apps.accounts.models import User
from apps.group.models import (BikeGroupsModel, EventModel, GroupUsersRolModel)


class UserAllSeralizer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'image']


class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = EventModel
        fields = '__all__'


class BikeGroupsSerializer(serializers.ModelSerializer):
    event = EventSerializer(read_only=True)

    class Meta:
        model = BikeGroupsModel
        fields = ["id", "name_group", "description", "city", "image", "event"]


## Add user
class BikeGroupsAddSerializer(serializers.ModelSerializer):

    class Meta:
        model = BikeGroupsModel
        fields = ["id"]


class GroupUsersRolSerilizer(serializers.ModelSerializer):

    class Meta:
        model = GroupUsersRolModel
        fields = ['group_id']

    def create(self, validated_data):

        return GroupUsersRolModel.objects.create(**validated_data)


class BikeGroupsAll(serializers.ModelSerializer):
    user_member_id = UserAllSeralizer(many=True)

    class Meta:
        model = BikeGroupsModel
        fields = ['user_member_id', 'name_group', 'image', 'city', 'event']


class GroupUserAllSeralizer(serializers.ModelSerializer):

    user_id = UserAllSeralizer(read_only=True)
    group_id = BikeGroupsAll(read_only=True)

    class Meta:
        model = GroupUsersRolModel
        fields = ['id', 'user_id', 'rol', 'group_id']