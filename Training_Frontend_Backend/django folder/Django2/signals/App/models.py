from django.db import models
from django.dispatch import receiver
from django.db.models.signals import pre_save,post_save
from django.contrib.auth.models import User

# Create your models here.


class Article(models.Model):
    title=models.CharField(max_length=30,null=False)
    body=models.TextField()
    author=models.CharField(max_length=30,null=False)

    def __str__(self):
        return self.title


class ArticleReaction(models.Model):
    user=models.CharField(max_length=30,null=False)
    article=models.ForeignKey(Article,on_delete=models.CASCADE)
    reaction=models.CharField(max_length=20,choices=[('like','like'),('love','love'),('wow','wow'),('sad','sad'),('hug','hug')])

    def __str__(self):
        return self.user

class ArticleComments(models.Model):
    user=models.CharField(max_length=20,null=False)
    article=models.ForeignKey(Article,on_delete=models.CASCADE)
    comments=models.CharField(max_length=20,null=False)

    def __str__(self):
        return self.user


class ArticleReactionChanged(models.Model):
    user=models.CharField(max_length=30,null=False,blank=False)
    article=models.ForeignKey(Article,on_delete=models.CASCADE)
    article_reaction=models.CharField(max_length=30,null=False)
    changed=models.BooleanField(default=False)

    def __str__(self):
        return self.article.title

@receiver(pre_save,sender=ArticleReaction)
def _pre_save_receiver(instance,sender=ArticleReaction,**kwargs):
     ArticleComments.objects.update_or_create(
         user=instance.user,
         article=instance.article,
         defaults={'comments': instance.reaction})

   
       
   

@receiver(post_save,sender=ArticleReaction)
def Article_reaction_update(instance,created,sender=ArticleReaction,**kwargs):
    print(created)
    
    '''if created:
        ArticleReactionChanged.objects.update_or_create(
        user=instance.user,
        article_reaction=instance.reaction,
        defaults={'changed': False})
      '''
       
    if not created:
       # print(instance.user)
       # print(instance.reaction)
        ArticleReactionChanged.objects.update_or_create(
        article=instance.article,
       # user=instance.user,
        
        defaults={'changed': True,
                  'article_reaction':instance.reaction,
                  'user':instance.user})
        print("article reaction of user :",instance.user,"is updated ")
      