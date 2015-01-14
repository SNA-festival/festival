# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0025_auto_20150113_1329'),
    ]

    operations = [
        migrations.CreateModel(
            name='LoginM',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('author', models.CharField(max_length=10)),
                ('password', models.CharField(max_length=10)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AlterField(
            model_name='post',
            name='created_date',
            field=models.DateTimeField(default=datetime.datetime(2015, 1, 14, 7, 48, 52, 937326, tzinfo=utc)),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='post',
            name='set_date',
            field=models.DateField(default=datetime.datetime(2015, 1, 14, 7, 48, 52, 937283, tzinfo=utc)),
            preserve_default=True,
        ),
    ]
