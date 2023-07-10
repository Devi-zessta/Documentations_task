# Generated by Django 4.1.5 on 2023-01-20 09:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projectapp', '0009_alter_demo_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='demo',
            name='small_integers',
            field=models.PositiveSmallIntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='demo',
            name='text',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
