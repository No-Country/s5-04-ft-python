from rest_framework import serializers
from .models import BikeGroupsModel, EventModel

class Eventseralizer(serializers.ModelSerializer):

    class Meta:
        model=EventModel
        fields=["id","title"]


class GroupsSerializer(serializers.ModelSerializer):
    event=Eventseralizer(read_only=True)   
    class Meta:
        model = BikeGroupsModel
        fields = ["user_id", "name", "image", "description", "city", "event"]

