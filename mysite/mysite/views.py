from django.shortcuts import render_to_response
from django.http import HttpResponseRedirect
from django.contrib import auth
from django.core.content_processors import csrf

# def login(request):
#     c={}
#     c.update(csrf(request))
#     return render_to_response('login.html',c)
    
def auth_view(request):
    c={}
    c.update(csrf(request))
    username = request.POST.get('username','')
    password = request.POST.get('password','')
    user = auth.authenticate(usrername=username, password=password)
    
    if user is not None:
        auth.login(request, user)
        return render_to_response('login.html',c)
        
    else:
        return HttpResponseRedirect('/accounts/invalid')
    