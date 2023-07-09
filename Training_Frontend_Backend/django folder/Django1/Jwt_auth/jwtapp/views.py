from django.shortcuts import render
from rest_framework.decorators import api_view 
from .serializers import *
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response 
from rest_framework.permissions import IsAuthenticated
from django.http import HttpResponse
from rest_framework.views import APIView
from django.contrib.auth import authenticate



from rest_framework_simplejwt.tokens import RefreshToken

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


# Create your views here.
print("starting")
@api_view(['POST'])
def register_view(request):
   if request.method=='POST':
      print("hii")
      serializer = RegistrationSerializer(data=request.data)
      print(type(serializer))
      print("serializer:",serializer)
      data = {}
      if serializer.is_valid():
         print("ser inside")
         account = serializer.save()
         print("ser inside")
         #print("type of :",type(account))
         data['msg']='successfully registered new user.'
         data['email']=account.email
         data['username']=account.username
         data['password']=account.password
         print(data)
      else:
         data = serializer.errors
   return Response(data)




@api_view(['GET'])

@permission_classes([IsAuthenticated])
def Auth_User_view(request):
	return Response("........Welcome user.......")



'''class login(APIView):
   def post(self,request):
      try:
         data=request.data
         print(data)
         serializer=Loginserializer(data=data)
         print(serializer)
         if serializer.is_valid():
            email=serializer.data['email']
            password=serializer.data['password']

            user=authenticate(email=email,password=password)
            if user is None:
               return Response({
                  'message':'user name and password is incorrect',
                  'data':serializer.errors,

               })
            refresh=RefreshToken.for_user(user)
            return {
               'refresh':str(refresh),
               'access':str(refresh.access_token),              
                             
            }

         else:      
            return Response({
               'message':'something went  wrong',
               'data':serializer.errors 
            })
         
      except:
         print("exception occured")


'''


