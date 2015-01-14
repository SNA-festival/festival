# -*- coding: utf-8 -*-
from django.http import HttpResponseRedirect
from django.shortcuts import render_to_response
from django.shortcuts import render, get_object_or_404
from django.core.urlresolvers import reverse
from django.template import RequestContext
from django.contrib import auth
# from django.core.content_processors import csrf


from .models import Document
from .forms import DocumentForm
from .models import Post
from .forms import PostForm


    
def post_list(request):
    posts = Post.objects.filter(published_date__isnull=False).order_by('published_date')
    return render(request, 'blog/post_list.html', {'posts': posts})

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/post_detail.html', {'post': post})

def post_new(request):
   # if 'save' in request.POST:
    if request.method == "POST":
        #save button
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            post = form.save(commit=False)
            #post.author = request.user
            post.save()
            newdoc = Document(docfile = request.FILES['docfile'])
            newdoc.save()
            print "mish"
            return HttpResponseRedirect(reverse(post_detail, kwargs={'pk': post.pk}))
        
        #upload button    
        formUpload = DocumentForm(request.POST, request.FILES)
        if formUpload.is_valid():
            newdoc = Document(docfile = request.FILES['docfile'])
            newdoc.save()
            print "mish22"
            # Redirect to the document list after POST
            return HttpResponseRedirect(".")    
            
    else:
        form = PostForm()
        formUpload = DocumentForm() # A empty, unbound form

    # Load documents for the list page
    #documents = Document.objects.all()
    #documents = Document.objects.order_by('documents/%Y/%m/%d').first()
    #documents = Document.objects.latest('pub_date')
    documents = Document.objects.order_by('id').reverse()[:1]
        
   # return render(request, 'blog/post_edit.html', {'form': form})
    return render_to_response(
    'blog/post_edit.html',
    {'documents': documents, 'formUpload': formUpload, 'form': form},
    context_instance=RequestContext(request)
    )
        
    

def post_publish(request, pk):
    post = get_object_or_404(Post, pk=pk)
    post.publish()
    return HttpResponseRedirect(reverse(post_detail, kwargs={'pk': pk}))

def post_draft_list(request):
    posts = Post.objects.filter(published_date__isnull=True).order_by('created_date')
    return render(request, 'blog/post_draft_list.html', {'posts': posts})


def post_remove(request, pk):
    post = get_object_or_404(Post, pk=pk)
    post.delete()
    return HttpResponseRedirect(reverse(post_list))
    

def post_edit(request, pk):
    post = get_object_or_404(Post, pk=pk)
    if request.method == "POST":
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            post = form.save(commit=False)
            #post.author = request.user
            post.save()
            return HttpResponseRedirect(reverse(post_detail, kwargs={'pk': post.pk}))
    else:
        form = PostForm(instance=post)
    return render(request, 'blog/post_edit.html', {'form': form})
    
# mish v1 upload image    
def list(request):
    # Handle file upload
    if request.method == 'POST':
        formUpload = DocumentForm(request.POST, request.FILES)
        if formUpload.is_valid():
            newdoc = Document(docfile = request.FILES['docfile'])
            newdoc.save()

            # Redirect to the document list after POST
            return HttpResponseRedirect(reverse('mysite.blog.views.list'))
    else:
        formUpload = DocumentForm() # A empty, unbound form

    # Load documents for the list page
    documents = Document.objects.all()

    # Render list page with the documents and the form
    return render_to_response(
        'blog/post_edit.html',
        {'documents': documents, 'formUpload': formUpload},
        context_instance=RequestContext(request)
    )
    
def Home(request):
    #posts = Post.objects.filter(published_date__isnull=True).order_by('created_date')
    #return render(request, 'blog/post_draft_list.html', {'posts': posts}) 
    posts = Post.objects.filter(published_date__isnull=True).order_by('created_date')
    
    if request.method == "POST":
        
        Loginform = PostForm(request.POST)
        if Loginform.is_valid():
            # login = Loginform.save(commit=False)
            # login.save()
            
            return HttpResponseRedirect("ok!")   
        
        #save button
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            post = form.save(commit=False)
            #post.author = request.user
            post.save()
            newdoc = Document(docfile = request.FILES['docfile'])
            newdoc.save()
            return HttpResponseRedirect(".")   
            #return HttpResponseRedirect(reverse(post_detail, kwargs={'pk': post.pk}))
        
        #upload button    
        formUpload = DocumentForm(request.POST, request.FILES)
        if formUpload.is_valid():
            newdoc2 = Document(docfile = request.FILES['docfile'])
            newdoc2.save()
            print "mish22"
            # Redirect to the document list after POST
            return HttpResponseRedirect(".")    
            
    else:
        form = PostForm()
        formUpload = DocumentForm() # A empty, unbound form

    # Load documents for the list page
    #documents = Document.objects.all()
    #documents = Document.objects.order_by('documents/%Y/%m/%d').first()
    #documents = Document.objects.latest('pub_date')
    #documents = Document.objects.order_by('id').reverse()[:1]
    
    # c={}
    # c.update(csrf(request))
    # username = request.POST.get('username','')
    # password = request.POST.get('password','')
    # user = auth.authenticate(usrername=username, password=password)
    
    # if user is not None:
    #     auth.login(request, user)
    #     return render_to_response('login.html',c)
        
    # else:
    #     return HttpResponseRedirect('/accounts/invalid')
 
 
    return render_to_response(
    'blog/HomePage.html',
    {'formUpload': formUpload, 'posts': posts, 'form': form},
    context_instance=RequestContext(request)
    )