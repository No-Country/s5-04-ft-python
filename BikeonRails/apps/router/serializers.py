from rest_framework import serializers

from apps.router.models import UserRouterModels


class UserRouteSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserRouterModels
        fields = '__all__'

    def to_representation(self, instance):
        return {
            "id": instance.id,
            "username": instance.user_id.username,
            "name_route": instance.route_id.name_route,
            "distance": instance.route_id.distance,
            "time": instance.route_id.time,
            "dificulty": instance.route_id.dificulty,
            "latitude": instance.route_id.latitude,
            "longitude": instance.route_id.longitude,
        }