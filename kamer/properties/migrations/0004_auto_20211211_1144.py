# Generated by Django 3.2.9 on 2021-12-11 11:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0003_alter_property_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='property',
            name='id',
        ),
        migrations.AlterField(
            model_name='property',
            name='externalId',
            field=models.TextField(primary_key=True, serialize=False),
        ),
    ]
