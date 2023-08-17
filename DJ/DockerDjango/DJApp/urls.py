from django.contrib import admin
from django.urls import include, path

from .import views


urlpatterns = [
    path('',views.ToDo,name='ToDo'),
    path('data',views.Data,name='data')
    
]