from django.db import models

from apps.accounts.models import User


class EventModel(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='event/', default='event.png', blank=True, null=True)
    start_route = models.CharField(max_length=255)
    end_route = models.CharField(max_length=255, blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = 'Evento'
        verbose_name_plural = 'Eventos'
        ordering = ['id']


class BikeGroupsModel(models.Model):
    user_member_id = models.ManyToManyField(User, db_table="GroupUsersRolModel")
    name_group = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='group/', default='group.png', blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    event = models.ForeignKey(EventModel, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self) -> str:
        return f"user {self.name_group}"

    class Meta:
        verbose_name = 'Grupo'
        verbose_name_plural = 'Grupos'
        ordering = ['id']


class GroupUsersRolModel(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    group_id = models.ForeignKey(BikeGroupsModel, on_delete=models.CASCADE)
    rol = models.BooleanField(default=True)

    def __str__(self) -> str:
        return f"user {self.id}"

    class Meta:
        verbose_name = 'GroupsUserRol'
        verbose_name_plural = 'GroupsUserRols'
        ordering = ['id']