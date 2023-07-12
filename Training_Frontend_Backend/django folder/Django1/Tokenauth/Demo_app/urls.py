from django.urls import path
from .views import *
from rest_framework.authtoken.views import obtain_auth_token

app_name = 'account'

urlpatterns = [
	path('', registration_view, name="register"),
    path('login/', obtain_auth_token, name="login"),
    path('view/',Auth_User_view,name='view'),
]
