from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name="index"),
    path('movies/', views.MovieList.as_view(), name='movie-list'),
]
