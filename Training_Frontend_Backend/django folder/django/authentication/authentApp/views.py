from django.shortcuts import render,redirect
from django.contrib import messages
from django.contrib.auth.models import User,auth
from .models import Grocery


'''from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


class AuthenticatedView(APIView):
    permission_classes = [IsAuthenticated, ]

    def get(self, request):
        msg = {'message': f'Hi {request.user.username}! Congratulations on being authenticated!'}
        return Response(msg, status=status.HTTP_200_OK)'''

# Create your views here.


def Registration(request):
    if request.method == 'POST':
        print("inide if")
        first_name=request.POST['first_name']
        last_name=request.POST['last_name']
        username=request.POST['username']
        password1=request.POST['password1']
        password2=request.POST['password2']
        if password1==password2:
               if User.objects.filter(username=username).exists():
                 messages.info(request,"username already exists")
                 return redirect('Registration')
               else:
                 user=User.objects.create_user(username=username,password=password1,first_name=first_name,last_name=last_name)
                 user.save()
                 messages.info(request,"user created")

                 return redirect('login')
        else:
            messages.info(request,"password is not matching")
            return redirect('Registration')
    else:
        print("else statement")
        return render(request,'Registration.html')

def login(request):
    if request.method=="POST":
      username=request.POST['username']
      password=request.POST['password']
      user=auth.authenticate(username=username,password=password)
      print(user)
      if user is not None:
            auth.login(request,user)
            return redirect('/')
      else:
            messages.info(request,"username doesn't exists")
            return redirect('login')
    
    return render(request,'login.html')



def logout(request):
    auth.logout(request)
    return redirect('/')


def Home(request):
    prod=Grocery.objects.all()
    return render(request,'Home.html',{'prod':prod})

    