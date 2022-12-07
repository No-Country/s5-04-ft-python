from rest_framework import serializers
from apps.group.models import (BikeGroupsModel, EventModel, GroupUsersRolModel)


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
        fields = ["user_member_id"]

