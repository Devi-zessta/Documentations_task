from django.urls import path
from . import views

urlpatterns=[
    path('api/',views.GetUserDetails.as_view()),
    path('',views.check)
    
]