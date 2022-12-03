from rest_framework import serializers
from .models import BikeGroupsModel, EventModel
from apps.accounts.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "image"]


class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = EventModel
        fields = ["id", "title"]


# class UserSerializer(serializers.ModelSerializer):

 #   class Meta:
  #      model = User
   #     fields = ["id", "username"]


class GroupsSerializer(serializers.ModelSerializer):
    event = EventSerializer(read_only=True)
   # user_id = UserSerializer(read_only=True)
    members = UserSerializer(read_only=True)

    class Meta:
        model = BikeGroupsModel
        fields = ["id", "user_id", "name", "image",
                  "city", "description", "members", "event"]
