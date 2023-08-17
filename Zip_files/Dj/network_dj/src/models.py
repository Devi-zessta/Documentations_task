from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=255,null=False)
    episode_id = models.PositiveIntegerField(null=True, blank=True)
    opening_crawl = models.TextField(null=True, blank=True)
    director = models.CharField(max_length=255,null=True)
    release_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.title
