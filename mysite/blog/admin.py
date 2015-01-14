from django.contrib import admin
from .models import Post
from .models import Document
from .models import LoginM

admin.site.register(Post)
admin.site.register(Document)
admin.site.register(LoginM)