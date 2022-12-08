from rest_framework import serializers
from apps.router.models import RouteModels


class RouteSerializer(serializers.ModelSerializer):

    class Meta:
        model = RouteModels
        fields = ['id', 'name_route', 'distance', 'time', 'dificulty', 'latitude', 'longitude']
