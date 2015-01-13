from django.contrib import admin
from .models import Post
from .models import Document

admin.site.register(Post)
admin.site.register(Document)