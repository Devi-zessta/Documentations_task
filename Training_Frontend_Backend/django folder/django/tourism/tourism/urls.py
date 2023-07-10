"""tourism URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path 
from home import views as hom
from favourite import views as fave 
from description import views as desc

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', hom.homePage),
    path('fav/', fave.favouritePage),
    path('tajmahal/', desc.tajmahal),
    path('varanasi/', desc.varanasi),
    path('golden/', desc.goldentemple),
    path('mysore/', desc.mysore),


]
