from django.db import models

# Create your models here.

from django.db import models

class Account(models.Model):
    username=models.CharField( max_length=50,null=True)
    first_name=models.CharField( max_length=50,null=True)
    last_name=models.CharField( max_length=50,null=True)
    password=models.CharField( max_length=50,null=True)
    
