from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse
#from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from .serializers import *
from django.db.models import Q
# Create your views here.
def check(request):
    return HttpResponse("Hello, world!")

# @api_view(['GET'])
# def get_userdetails(request):
#     users = UserBankdetails.objects.filter(balance_amount__gt=100)
#     serializer = UserBankdetailsSerializer(users,many=True)
#     return Response(serializer.data)

class GetUserDetails(APIView):
    def get(self, request, *args, **kwargs):
        users = UserBankdetails.objects.filter(balance_amount__gt=100) & UserBankdetails.objects.filter(account_type='Savings')
        serializer = UserBankdetailsSerializer(users,many=True)
        return Response(serializer.data)