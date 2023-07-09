
from django.urls import path
from . import views

urlpatterns = [
  path('',views.Home,name='Home'),
  path('Registration/',views.Registration,name='Registration'),
  path('login/',views.login,name='login'),
  path('logout/',views.logout,name='logout'),
  
  
]



