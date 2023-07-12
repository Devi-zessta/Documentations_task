
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view,authentication_classes,permission_classes

from .serializers import RegistrationSerializer
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


@api_view(['POST'])
def registration_view(request):

	if request.method == 'POST':
		serializer = RegistrationSerializer(data=request.data)
		#print(type(serializer))
		data = {}
		if serializer.is_valid():
			account = serializer.save()
			#print("type of :",type(account))
			data['response'] = 'successfully registered new user.'
			data['email'] = account.email
			data['username'] = account.username
			#data['password']=account.password
			token = Token.objects.get(user=account)
			data['token'] = token.key
		else:
			data = serializer.errors
		return Response(data)


@api_view(['GET'])

@permission_classes([IsAuthenticated])
def Auth_User_view(request):
	return Response("........Welcome user.......")