from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(ArticleComments)
admin.site.register(ArticleReaction)
admin.site.register(Article)

admin.site.register(ArticleReactionChanged)
