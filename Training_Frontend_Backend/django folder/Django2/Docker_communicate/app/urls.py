from django.urls import path
from . import views
urlpatterns=[
    path('',views.new_index,name='new_index'),
    path('people',views.people),
    path('favourite',views.favourite,name='favourite'),

  
]