from django.shortcuts import render

# Create your views here.
def favouritePage(request):
    return render(request,'favourite/favourite.html')
