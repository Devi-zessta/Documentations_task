from django.db import models
from django.db.models.signals import pre_save,post_save
from django.dispatch import receiver
from django.template.defaultfilters import slugify

# Create your models here.
class Demo(models.Model):
    name=models.CharField(max_length=10,null=True,blank=True)
    text=models.CharField(max_length=200,blank=True)
    rollno=models.IntegerField()
    bool=models.BooleanField(default=True,verbose_name="boolean field",null=True)
    decimal=models.DecimalField(max_digits=5,decimal_places=3)
    positive_integers=models.PositiveIntegerField()
    small_integers=models.PositiveSmallIntegerField()
    slug=models.SlugField(blank=True)

    


    def __str__(self):
        return self.name
    
@receiver(pre_save,sender=Demo)
def handler(sender,instance,**kwargs):
    instance.slug=(slugify(instance.text))
    
    
