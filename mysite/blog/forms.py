# -*- coding: utf-8 -*-
from django import forms
from django.forms import ModelForm, Textarea
from django.utils.translation import ugettext_lazy as _

from .models import Post

class PostForm(forms.ModelForm):


    
    #text1 = models.TextField()
    # text1 = forms.CharField(label='Your name')
    #text1 = forms.URLField(initial='http://')
    # step = forms.CharField(label='這個習俗的步驟')
    # tip = forms.CharField(label='這個習俗的小撇步')
    # material = forms.CharField(label='這個習俗需要什麼材料')
    docfile = forms.FileField(label='Select a file!')
    set_date = forms.DateField(label='這個節慶在什麼時間')
    #set_date.setdefault('input_formats', ("%d.%m.%Y",))
    # title = forms.CharField(label='標題')
    festival_name = forms.CharField(label='是什麼節日呢')
    
    class Meta:
        model = Post
        fields = ('festival_name','set_date','festival_story','docfile', )
              
        # widgets = {
        #     'text1': Textarea(attrs={'cols': 80, 'rows': 20}),
        # }

        

class DocumentForm(forms.Form):
    docfile = forms.FileField(
        label='Select a file'
    )    
