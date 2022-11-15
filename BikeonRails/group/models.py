from django.db import models
from accounts.models import User


#Eventos
class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField('event image', upload_to='event/')
    route = models.CharField(max_length=255) 
    start_date = models.DateField(null=True, blank=True)   
    end_date = models.DateField(null=True, blank=True)
    participants = models.CharField(max_length=255)


    def __str__(self) -> str:
        return self.title



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



#Bicicletas
class Bicycle(models.Model):
    brand = models.CharField(max_length=255)
    picture = models.ImageField('bicycle pic', upload_to='bicycle/')
    serial = models.CharField(max_length=255)
    color = models.CharField(max_length=255)
    size = models.CharField(max_length=15)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.brand