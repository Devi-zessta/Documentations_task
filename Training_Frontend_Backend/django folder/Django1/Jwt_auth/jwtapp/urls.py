from django.urls import path
from .views import *

urlpatterns = [
         
         path('register/',register_view,name='register'),
         path('view/',Auth_User_view)
              
        
]