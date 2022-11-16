from django.db import models
from accounts.models import User



# Create your models here.
class BikeGroups(models.Model):
    user_id = models.ManyToManyField(User)
    name = models.CharField(max_length=255)
    description = models.TextField()
    picture = models.ImageField('foto group',upload_to='group/', null=False, blank=True, default='default.jpg')
    city = models.CharField(max_length=255)
    
    def __str__(self) -> str:
        return self.name

#Eventos
class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField('event image', upload_to='event/', default='default.jpg')
    route = models.CharField(max_length=255) 
    start_date = models.DateField(null=True, blank=True)   
    end_date = models.DateField(null=True, blank=True)
    bike_group = models.ForeignKey(BikeGroups, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.title
    

#Bicicletas
class Bicycle(models.Model):

    class BikeSize(models.TextChoices):
        SMALL = 'SM',('Small')
        MEDIUM = 'MD',('Medium')
        LARGE = 'LG',('Small')
        XLARGE = 'XL',('XLarge')

    class BikeColors(models.TextChoices):
        WHITE = 'WT',('Blanco')
        BLACK = 'BK',('Negro')
        RED = 'RD',('Rojo')
        GREEN = 'GN',('Verde')
        YELLOW = 'YW',('Amarillo')
        BLUE = 'BL',('AZUL')
        GREY = 'GR',('Blanco')
        PINK = 'PK',('Blanco')


    brand = models.CharField(max_length=255)
    picture = models.ImageField('bicycle pic', upload_to='bicycle/', null=False, default='default.jpg')
    serial = models.CharField(max_length=255)
    color = models.CharField(max_length=2, choices=BikeColors.choices, default=BikeColors.WHITE)
    size = models.CharField(max_length=2, choices=BikeSize.choices, default=BikeSize.MEDIUM)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)


    def __str__(self) -> str:
        return self.brand

