# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_auto_20141221_0942'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='set_date',
            field=models.DateTimeField(default=datetime.datetime(2014, 12, 21, 9, 6, 39, 187098, tzinfo=utc)),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='post',
            name='created_date',
            field=models.DateTimeField(default=datetime.datetime(2014, 12, 21, 9, 6, 39, 187132, tzinfo=utc)),
            preserve_default=True,
        ),
    ]
