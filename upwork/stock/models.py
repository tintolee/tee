from django.db import models

# Create your models here.
class Stock(models.Model):
    title = models.CharField(max_length=120)
    price = models.IntegerField()
    high= models.IntegerField()
    low= models.IntegerField()
    outstanding= models.IntegerField()

    def _str_(self):
        return self.title