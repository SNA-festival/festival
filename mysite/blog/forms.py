# -*- coding: utf-8 -*-
from django import forms

from .models import Post

class PostForm(forms.ModelForm):


    docfile = forms.FileField(label='Select a file!')
    
    class Meta:
        model = Post
        fields = ('docfile', 'festival_name','set_date', 'step', 'material', 'tip', 'festival_story',)  
        

class DocumentForm(forms.Form):
    docfile = forms.FileField(
        label='Select a file'
    )    
