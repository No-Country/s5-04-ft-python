from django.db import models
from accounts.models import User
from event.models import Event



# Create your models here.
class Group(models.Model):
    user_id = models.ManyToManyField(User)
    name = models.CharField(max_length=255)
    description = models.TextField()
    picture = models.ImageField('foto group',upload_to='group/', null=True, blank=True)
    city = models.CharField(max_length=255)
    event_id = models.ForeignKey(Event,on_delete=models.CASCADE)

    
    def __str__(self) -> str:
        return self.name


    class meta: 
        verbose_name = 'Group'
        verbose_name_plural = 'Groups'