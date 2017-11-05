# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-24 02:03
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('service_provider', '0002_auto_20170824_1002'),
    ]

    operations = [
        migrations.CreateModel(
            name='EstimateModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('logistics_star', models.CharField(max_length=100, verbose_name='\u7269\u6d41\u661f\u7ea7')),
                ('service_star', models.CharField(max_length=100, verbose_name='\u670d\u52a1\u5546\u661f\u7ea7')),
                ('logistics_satisfactory', models.CharField(max_length=100, verbose_name='\u7269\u6d41\u6ee1\u610f')),
                ('service_satisfactory', models.CharField(max_length=100, verbose_name='\u670d\u52a1\u5546\u6ee1\u610f')),
                ('logistics_comment', models.CharField(max_length=100, verbose_name='\u7269\u6d41\u8bc4\u4ef7')),
                ('service_comment', models.CharField(max_length=100, verbose_name='\u670d\u52a1\u5546\u8bc4\u4ef7')),
            ],
            options={
                'verbose_name': '\u8bc4\u4ef7',
                'verbose_name_plural': '\u8bc4\u4ef7',
            },
        ),
        migrations.CreateModel(
            name='ProcessModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='\u6d41\u7a0b\u540d\u79f0')),
                ('apply_item', models.CharField(max_length=100, verbose_name='\u9002\u7528\u9879\u76ee')),
                ('responsible', models.CharField(max_length=100, verbose_name='\u6d41\u7a0b\u8d1f\u8d23\u4eba')),
                ('phone', models.CharField(max_length=100, verbose_name='\u624b\u673a/\u7535\u8bdd')),
                ('email', models.CharField(max_length=100, verbose_name='\u7535\u5b50\u90ae\u4ef6')),
            ],
            options={
                'verbose_name': '\u6d41\u7a0b',
                'verbose_name_plural': '\u6d41\u7a0b',
            },
        ),
        migrations.CreateModel(
            name='ProjectModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='\u9879\u76ee\u540d\u79f0')),
                ('create_date', models.DateTimeField(verbose_name='\u521b\u5efa\u65f6\u95f4')),
                ('test_index', models.CharField(max_length=100, verbose_name='\u68c0\u6d4b\u6307\u6807')),
                ('species', models.CharField(max_length=100, verbose_name='\u7269\u79cd')),
                ('sample_size', models.CharField(max_length=100, verbose_name='\u6837\u672c\u6570\u91cf')),
                ('homogenization', models.BooleanField(verbose_name='\u6837\u54c1\u5747\u8d28\u5316\u8bf4\u660e')),
                ('sampling_date', models.DateField(max_length=100, verbose_name='\u53d6\u6837\u65f6\u95f4')),
                ('sampling_address', models.CharField(max_length=100, verbose_name='\u53d6\u6837\u5730\u5740')),
                ('process', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='project', to='service_provider.ProcessModel', verbose_name='process')),
            ],
            options={
                'verbose_name': '\u9879\u76ee',
                'verbose_name_plural': '\u9879\u76ee',
            },
        ),
        migrations.CreateModel(
            name='ProjectStateModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='\u72b6\u6001\u540d\u79f0')),
                ('date', models.DateTimeField(verbose_name='\u53d1\u751f\u65f6\u95f4')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='state', to='service_provider.ProjectModel', verbose_name='project')),
            ],
            options={
                'verbose_name': '\u9879\u76ee\u72b6\u6001',
                'verbose_name_plural': '\u9879\u76ee\u72b6\u6001',
            },
        ),
        migrations.CreateModel(
            name='SampleModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('identifier', models.CharField(max_length=100, verbose_name='\u6837\u672c\u7f16\u53f7')),
                ('genre', models.CharField(max_length=100, verbose_name='\u6837\u672c\u7c7b\u578b')),
                ('storage_medium', models.CharField(max_length=100, verbose_name='\u4fdd\u5b58\u4ecb\u8d28')),
                ('number', models.CharField(max_length=100, verbose_name='\u6570\u91cf')),
                ('grouping', models.CharField(max_length=100, verbose_name='\u5206\u7ec4')),
                ('mark', models.CharField(max_length=100, verbose_name='\u5907\u6ce8')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sample', to='service_provider.ProjectModel', verbose_name='project')),
            ],
            options={
                'verbose_name': '\u6837\u672c',
                'verbose_name_plural': '\u6837\u672c',
            },
        ),
        migrations.CreateModel(
            name='SubProcessModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='\u5b50\u6d41\u7a0b\u540d\u79f0')),
                ('responsible', models.CharField(max_length=100, verbose_name='\u5b50\u6d41\u7a0b\u8d1f\u8d23\u4eba')),
                ('start_state', models.CharField(max_length=100, verbose_name='\u5f00\u59cb\u72b6\u6001')),
                ('stop_state', models.CharField(max_length=100, verbose_name='\u7ed3\u675f\u72b6\u6001')),
                ('update_state', models.CharField(max_length=100, verbose_name='\u66f4\u65b0\u72b6\u6001')),
                ('cycle', models.CharField(max_length=100, verbose_name='\u9884\u8ba1\u5468\u671f')),
                ('phone', models.CharField(max_length=100, verbose_name='\u624b\u673a/\u7535\u8bdd')),
                ('email', models.CharField(max_length=100, verbose_name='\u7535\u5b50\u90ae\u4ef6')),
                ('process', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subprocess', to='service_provider.ProcessModel', verbose_name='process')),
            ],
            options={
                'verbose_name': '\u5b50\u6d41\u7a0b',
                'verbose_name_plural': '\u5b50\u6d41\u7a0b',
            },
        ),
        migrations.AddField(
            model_name='estimatemodel',
            name='project',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='estimate', to='service_provider.ProjectModel', verbose_name='project'),
        ),
    ]
