from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Movie
from .serializers import MovieSerializer
import requests

class MovieList(APIView):
    def get(self, request):
        response = requests.get('https://swapi.dev/api/films')
        data = response.json()
        
        movies = []
        for movie_data in data['results']:
            movie = Movie(
                title=movie_data['title'],
                episode_id=movie_data['episode_id'],
                opening_crawl=movie_data['opening_crawl'],
                director=movie_data['director'],
                release_date=movie_data['release_date']
            )
            movies.append(movie)

        Movie.objects.bulk_create(movies)
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)

# Create your views here.
def index(request):
    return HttpResponse("<h1>Welcome</h1>")