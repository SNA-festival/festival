# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0013_merge'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='docfile',
            field=models.FileField(default=None, null=True, upload_to=b'documents/%Y/%m/%d', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='post',
            name='created_date',
            field=models.DateTimeField(default=datetime.datetime(2015, 1, 11, 16, 8, 50, 296818, tzinfo=utc)),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='post',
            name='set_date',
            field=models.DateTimeField(default=datetime.datetime(2015, 1, 11, 16, 8, 50, 296774, tzinfo=utc)),
            preserve_default=True,
        ),
    ]
