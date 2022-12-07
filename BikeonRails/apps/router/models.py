from django.db import models

from apps.accounts.models import User


class RouteModels(models.Model):
    dificulty_choices = (
        ('Easy', 'Easy'),
        ('Normaly', 'Normaly'),
        ('Deficult', 'Deficult'),
    )

    name_route = models.CharField(max_length=150, unique=True)
    distance = models.CharField(max_length=150, blank=True, null=True)
    time = models.DateTimeField(blank=True, null=True)
    dificulty = models.CharField(choices=dificulty_choices, default=dificulty_choices[1][0], max_length=8)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)

    def __str__(self) -> str:
        return self.name_route

    class Meta:
        verbose_name = "Route"
        verbose_name_plural = "Routes"
        ordering = ["id"]


class UserRouterModels(models.Model):
    route_id = models.ForeignKey(RouteModels, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.route_id)

    class Meta:
        verbose_name = "UserRouter"
        verbose_name_plural = "UserRoutes"
        ordering = ["id"]


