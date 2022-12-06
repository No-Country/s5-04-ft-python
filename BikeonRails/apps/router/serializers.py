from rest_framework import serializers
from apps.router.models import RouteModels


class RouteSerializer(serializers.ModelSerializer):

    class Meta:
        model = RouteModels
        fields = '__all__'

    def to_representation(self, instance):
        return {
            "id": instance.id,
            "name_route": instance.name_route,
            "distance": instance.distance,
            "time": instance.time,
            "dificulty": instance.dificulty,
            "latitude": instance.latitude,
            "longitude": instance.longitude,
            "id_user": instance.user_id.id,
            "id_username": instance.user_id.username,

        }