from django.db import models

# Create your models here.
class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField('foto evento', upload_to='event/')
    route = models.CharField(max_length=255)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    participants = models.CharField(max_length=255)


    def __str__(self) -> str:
        return self.title


    class meta:
        verbose_name = 'Event'
        verbose_name_plural = 'Events'