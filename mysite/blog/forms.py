# -*- coding: utf-8 -*-
from django import forms
from django.forms import ModelForm, Textarea
from django.utils.translation import ugettext_lazy as _

from .models import Post
from .models import LoginM

class Login(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    class Meta:
        model = LoginM
        widgets = {
            'password': forms.PasswordInput(),
        }

class PostForm(forms.ModelForm):


    
    #text1 = models.TextField()
    # text1 = forms.CharField(label='Your name')
    #text1 = forms.URLField(initial='http://')
    # step = forms.CharField(label='這個習俗的步驟')
    # tip = forms.CharField(label='這個習俗的小撇步')
    # material = forms.CharField(label='這個習俗需要什麼材料')
    docfile = forms.FileField(label='')
    set_date = forms.DateField(label='節慶日期')
    #set_date.setdefault('input_formats', ("%d.%m.%Y",))
    # title = forms.CharField(label='標題')
    festival_name = forms.CharField(label='節慶名稱')
    festival_story= forms.CharField(label='節慶故事',widget=forms.Textarea)
    class Meta:
        model = Post
        fields = ('docfile','festival_name','set_date','festival_story')
              
        # widgets = {
        #     'text1': Textarea(attrs={'cols': 80, 'rows': 20}),
        # }

        

class DocumentForm(forms.Form):
    docfile = forms.FileField(
        label='Select a file'
    )    
