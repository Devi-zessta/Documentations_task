from django.contrib.auth import authenticate
#from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view


from rest_framework.response import Response



@api_view(["POST"])
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    if username is None or password is None:
      
        return Response({'error': 'Please provide both username and password'})

    user = authenticate(username=username, password=password)
    print("user:",user)
    if not user:
       
        return Response({'error': 'Invalid Credentials'})

    token, created = Token.objects.get_or_create(user=user)
   #print("token:",token)
   # print("created:",created)
   # print(type(token))
    
    return Response({'token': token.key})



@api_view(["GET"])
def sample_api(request):
     
    data={' hello welcome '}
    
    return Response(data)
   