# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0011_auto_20150111_1601'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='created_date',
            field=models.DateTimeField(default=datetime.datetime(2015, 1, 11, 15, 47, 10, 160238, tzinfo=utc)),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='post',
            name='set_date',
            field=models.DateTimeField(default=datetime.datetime(2015, 1, 11, 15, 47, 10, 160183, tzinfo=utc)),
            preserve_default=True,
        ),
    ]
