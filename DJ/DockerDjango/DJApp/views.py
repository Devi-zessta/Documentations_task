import logging
from django.shortcuts import render
from django.contrib.auth.models import User
from .models import ToDoModal
from django.shortcuts import render,redirect

# Create your views here.

def ToDo(request):
    all_todo_items = ToDoModal.objects.all()
    context={'Items':all_todo_items}
    print("...........................",context)
    return render(request,'ToDo.html',context)

def Data(request):
    print()
    name=request.POST['todo']
    user=ToDoModal(ToDoItem=name)
    user.save()
    return redirect(ToDo)
    