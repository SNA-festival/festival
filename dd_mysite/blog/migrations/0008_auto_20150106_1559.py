# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_auto_20141229_1534'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='created_date',
            field=models.DateTimeField(default=datetime.datetime(2015, 1, 6, 14, 59, 1, 443439, tzinfo=utc)),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='post',
            name='set_date',
            field=models.DateTimeField(default=datetime.datetime(2015, 1, 6, 14, 59, 1, 443353, tzinfo=utc)),
            preserve_default=True,
        ),
    ]
