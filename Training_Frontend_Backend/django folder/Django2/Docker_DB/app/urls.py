
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    
       path('',views.new_index,name='new_index'),
]
