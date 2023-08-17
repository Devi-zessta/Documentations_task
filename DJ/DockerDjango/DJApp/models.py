from django.db import models

# Create your models here.

class ToDoModal(models.Model):
    ToDoItem=models.TextField(max_length=30)