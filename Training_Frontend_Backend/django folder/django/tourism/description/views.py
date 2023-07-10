from django.shortcuts import render

# Create your views here.
def tajmahal(request):
    return render(request,'description/tajmahal.html')
def goldentemple(request):
    return render(request,'description/goldentemple.html') 
def mysore(request):
    return render(request,'description/mysore.html') 
def varanasi(request):
    return render(request,'description/varanasi.html')