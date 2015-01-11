# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0008_auto_20150106_1559'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='docfile',
            field=models.FileField(default=b'DEFAULT VALUE', upload_to=b'mish/%Y/%m/%d'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='post',
            name='created_date',
            field=models.DateTimeField(default=datetime.datetime(2015, 1, 6, 15, 31, 5, 338239, tzinfo=utc)),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='post',
            name='set_date',
            field=models.DateTimeField(default=datetime.datetime(2015, 1, 6, 15, 31, 5, 338200, tzinfo=utc)),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='post',
            name='text1',
            field=models.TextField(default=b'DEFAULT VALUE'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='post',
            name='title',
            field=models.CharField(default=b'DEFAULT VALUE', max_length=200),
            preserve_default=True,
        ),
    ]
