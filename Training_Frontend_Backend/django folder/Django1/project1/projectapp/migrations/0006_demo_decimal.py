# Generated by Django 4.1.5 on 2023-01-20 07:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projectapp', '0005_alter_demo_bool'),
    ]

    operations = [
        migrations.AddField(
            model_name='demo',
            name='decimal',
            field=models.DecimalField(decimal_places=3, default=1, max_digits=5),
            preserve_default=False,
        ),
    ]
