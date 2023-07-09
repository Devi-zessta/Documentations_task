from django.db import models

# Create your models here.
class Grocery(models.Model):

    '''username=models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    firstname=models.CharField(max_length=100)
    lastname=models.CharField(max_length=100)   '''

    product=models.CharField(max_length=100)
    price=models.IntegerField()
    
