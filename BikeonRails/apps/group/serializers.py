from rest_framework import serializers

from apps.accounts.models import User
from apps.group.models import BikeGroupsModel, EventModel


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ["id", "username", "manager"]


class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = EventModel
        fields = '__all__'


class BikeGroupsSerializer(serializers.ModelSerializer):
    event = EventSerializer(read_only=True)
    # user_member_id = UserSerializer(many=True)

    class Meta:
        model = BikeGroupsModel
        fields = ["id","name_group", "description", "city", "image", "event"]
