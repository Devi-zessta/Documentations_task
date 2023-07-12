from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
import requests
# Create your views here.
def new_index(request):
     
     return render(request,'new_index.html')


@api_view(['GET'])
def people(request):
     result=requests.get('https://swapi.dev/api/people')
     
     return Response(result)
     
@api_view(['GET'])
def favourite(request):
     result=requests.get('https://swapi.dev/api/favourite')
     return Response(result)
     
     