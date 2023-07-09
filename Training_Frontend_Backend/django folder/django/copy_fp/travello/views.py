
from django.shortcuts import render
from .models import Destination 
# Create your views here.
def index(request):
     '''obj1=Destination()
     obj1.name= "Mumbai"
     obj1.price=1000
     obj1.desc="The city that never sleeps"
     obj1.img="destinations.jpg"
     obj1.offer=True

     obj2=Destination()
     obj2.name= "hyderabad"
     obj2.price=2000
     obj2.desc="Famous for biryani"
     obj2.img="destination_1.jpg"
     obj2.offer=False

     obj3=Destination()
     obj3.name= "chennai"
     obj3.price=3000
     obj3.desc="Beautiful place to visit"
     obj3.img="destination_2.jpg"
     obj3.offer=False
     
     obj4=Destination()
     obj4.name= "Vizag"
     obj4.price=4000
     obj4.desc="Famous beach "
     obj4.img="destination_3.jpg"
     obj4.offer=True
     
     obj5=Destination()
     obj5.name= "Bangalore"
     obj5.price=5000
     obj5.desc="Beatiful city place to visit"
     obj5.img="destination_4.jpg"
     obj5.offer=False
     
     objs=[obj1,obj2,obj3,obj4,obj5]'''
     objs=Destination.objects.all()
     
     return render(request,'index.html',{'objs':objs})

