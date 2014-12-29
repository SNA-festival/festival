# -*- coding: utf-8 -*-
from django import forms

from .models import Post

class PostForm(forms.ModelForm):

    class Meta:
        model = Post
        fields = ('title','set_date', 'text1', )
        

class DocumentForm(forms.Form):
    docfile = forms.FileField(
        label='Select a file'
    )    
