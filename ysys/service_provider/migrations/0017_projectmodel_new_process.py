# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-15 05:23
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('service_provider', '0016_newprocess_newprocessstep'),
    ]

    operations = [
        migrations.AddField(
            model_name='projectmodel',
            name='new_process',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='project', to='service_provider.NewProcess', verbose_name='new\u6d41\u7a0b'),
        ),
    ]
