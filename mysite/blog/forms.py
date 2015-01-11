# -*- coding: utf-8 -*-
from django import forms
from django.forms import ModelForm, Textarea
from django.utils.translation import ugettext_lazy as _

from .models import Post

class PostForm(forms.ModelForm):


    
    #text1 = models.TextField()
    # text1 = forms.CharField(label='Your name')
    #text1 = forms.URLField(initial='http://')
    step = forms.CharField()
    tip = forms.CharField()
    material = forms.CharField()
    docfile = forms.FileField(label='Select a file!')
    #set_date1 = forms.DateTimeField(initial='%m/%d/%y %H:%M:%S')
    
    class Meta:
        model = Post
        fields = ('docfile', 'festival_name','set_date', 'step', 'material', 'tip', 'festival_story',)
              
        # widgets = {
        #     'text1': Textarea(attrs={'cols': 80, 'rows': 20}),
        # }

        

class DocumentForm(forms.Form):
    docfile = forms.FileField(
        label='Select a file'
    )    
