from django.db import models

# Create your models here.
class Account(models.Model):
    name=models.CharField(max_length=20,null=False)
    roll_no=models.IntegerField()
    description=models.TextField()