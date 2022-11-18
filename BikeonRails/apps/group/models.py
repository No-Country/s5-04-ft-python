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
    user_id = models.ManyToManyField(User)
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    image = models.ImageField(upload_to='group/', default='group.png', blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    event = models.ForeignKey(EventModel, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self) -> str:
        return f"user {self.user_id} - {self.name}"

    class Meta:
        verbose_name = 'Grupo'
        verbose_name_plural = 'Grupos'
        ordering = ['id']
