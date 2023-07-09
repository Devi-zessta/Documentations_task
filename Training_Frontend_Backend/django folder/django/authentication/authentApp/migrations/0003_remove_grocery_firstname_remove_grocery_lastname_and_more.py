# Generated by Django 4.1.5 on 2023-01-17 06:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentApp', '0002_rename_first_name_grocery_firstname_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='grocery',
            name='firstname',
        ),
        migrations.RemoveField(
            model_name='grocery',
            name='lastname',
        ),
        migrations.RemoveField(
            model_name='grocery',
            name='password',
        ),
        migrations.RemoveField(
            model_name='grocery',
            name='username',
        ),
        migrations.AddField(
            model_name='grocery',
            name='price',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='grocery',
            name='product',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
    ]
