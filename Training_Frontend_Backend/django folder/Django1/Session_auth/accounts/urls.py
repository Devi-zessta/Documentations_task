from django.urls import path
from .import views

urlpatterns = [
    path('register',views.register),
    path('login',views.login,name='login'),
    #path('accounts/data',views.data,name='data'),
    path('logout',views.logout,name='logout'),
]
