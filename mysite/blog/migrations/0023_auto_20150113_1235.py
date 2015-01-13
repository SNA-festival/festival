# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0022_auto_20150113_1009'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='author',
        ),
        migrations.RemoveField(
            model_name='post',
            name='material',
        ),
        migrations.RemoveField(
            model_name='post',
            name='step',
        ),
        migrations.RemoveField(
            model_name='post',
            name='tip',
        ),
        migrations.RemoveField(
            model_name='post',
            name='title',
        ),
        migrations.AlterField(
            model_name='post',
            name='created_date',
            field=models.DateTimeField(default=datetime.datetime(2015, 1, 13, 11, 35, 49, 722012, tzinfo=utc)),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='post',
            name='set_date',
            field=models.DateField(default=datetime.datetime(2015, 1, 13, 11, 35, 49, 721968, tzinfo=utc)),
            preserve_default=True,
        ),
    ]
