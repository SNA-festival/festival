from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.forms import ModelForm, Textarea

class LoginM(models.Model):
    
    #author = models.ForeignKey(User)
    author =  models.CharField(max_length=10)
    password =  models.CharField(max_length=10)
        #self.save()

    def __unicode__(self):
        return self.author


# Create your models here.
class Post(models.Model):
    
    #author = models.ForeignKey(User)
    festival_name = models.CharField(max_length=200)
    set_date = models.DateField(default=timezone.now())
    
    created_date = models.DateTimeField(default=timezone.now())
    published_date = models.DateTimeField(blank=True, null=True)
    
    # title = models.CharField(max_length=1000, default=None, blank=True, null=True)
    festival_story = models.TextField(default=None)
    # step = models.TextField(default=None, blank=True, null=True)
    # tip = models.TextField(default=None, blank=True, null=True)
    # material = models.TextField(default=None, blank=True, null=True)
    
    docfile = models.FileField(upload_to='documents/%Y/%m/%d', default=None)
    # = models.TextField(default=None, blank=True, null=True)

      
    #docfile = models.FileField(upload_to='mish/%Y/%m/%d', default='DEFAULT VALUE')


    def publish(self):
        self.published_date = timezone.now() 
        #self.save()

    def __unicode__(self):
        return self.festival_name
        
class Document(models.Model):
    
    #docfile = models.FileField(upload_to='documents/%Y/%m/%d', default=None, blank=True, null=True)
    docfile = models.FileField(upload_to='documents/%Y/%m/%d', default=None, blank=True)
    #created_date = models.DateTimeField(default=timezone.now())
    # def __unicode__(self):
    #     return self.docfile
