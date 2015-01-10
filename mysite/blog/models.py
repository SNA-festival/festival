from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.forms import ModelForm, Textarea

# Create your models here.
class Post(models.Model):
    # author = models.ForeignKey(User)
    festival_name = models.CharField(max_length=200)
    
    festival_date = models.DateTimeField(default=timezone.now())
    festival_story = models.TextField(default=None, blank=True, null=True)
    created_date = models.DateTimeField(default=timezone.now())
    published_date = models.DateTimeField(blank=True, null=True)
    
   
      
    #docfile = models.FileField(upload_to='mish/%Y/%m/%d', default='DEFAULT VALUE')

    def publish(self):
        self.published_date = timezone.now() 
        #self.save()

    def __unicode__(self):
        return self.festival_name
        
class Document(models.Model):
    docfile = models.FileField(upload_to='documents/%Y/%m/%d')
    #created_date = models.DateTimeField(default=timezone.now())
