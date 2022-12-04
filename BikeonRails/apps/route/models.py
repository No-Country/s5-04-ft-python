from django.db import models
from apps.accounts.models import User
from apps.group.models import EventModel


# Create your models here.
class BikesRoute(models.Model):
    DIFFICULTY_CHOICES = (
    ('Lento', 'Lento'),
    ('Moderado', 'Moderado'),
    ('Pro','Pro'),
    )
    start_lat = models.DecimalField(max_digits=22, decimal_places=16)
    start_lon = models.DecimalField(max_digits=22, decimal_places=16)
    end_lat = models.DecimalField(max_digits=22, decimal_places=16)
    end_lon = models.DecimalField(max_digits=22, decimal_places=16)
    title = models.CharField(max_length=200)
    distance = models.DecimalField(max_digits=5, decimal_places=1)
    difficulty = models.CharField(max_length=8, choices=DIFFICULTY_CHOICES, default=DIFFICULTY_CHOICES[1][0])
    travel_time = models.TimeField(auto_now=False, auto_now_add=False)
    
    def __str__(self):
        return self.title

class UserRoute(models.Model):
    user_id = models.ForeignKey(User,on_delete=models.CASCADE, blank=True, null=True)
    event_id = models.ForeignKey(EventModel,on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return "User:" + str(self.user_id) 