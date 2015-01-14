# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0027_auto_20150114_0850'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='created_date',
            field=models.DateTimeField(default=datetime.datetime(2015, 1, 14, 10, 48, 51, 947746, tzinfo=utc)),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='post',
            name='docfile',
            field=models.FileField(default=None, upload_to=b'documents/%Y/%m/%d'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='post',
            name='festival_story',
            field=models.TextField(default=None),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='post',
            name='set_date',
            field=models.DateField(default=datetime.datetime(2015, 1, 14, 10, 48, 51, 947685, tzinfo=utc)),
            preserve_default=True,
        ),
    ]
