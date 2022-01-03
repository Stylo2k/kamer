# Generated by Django 4.0 on 2022-01-03 11:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Property',
            fields=[
                ('externalId', models.TextField(primary_key=True, serialize=False)),
                ('areaSqm', models.IntegerField()),
                ('city', models.TextField()),
                ('coverImageUrl', models.TextField(null=True)),
                ('furnish', models.TextField()),
                ('latitude', models.TextField()),
                ('longitude', models.TextField()),
                ('postalCode', models.TextField()),
                ('propertyType', models.TextField()),
                ('rent', models.IntegerField()),
                ('title', models.TextField(null=True)),
                ('deposit', models.IntegerField(null=True)),
                ('descriptionTranslated', models.TextField(null=True)),
                ('gender', models.TextField(null=True)),
                ('isRoomActive', models.BooleanField(default=True, null=True)),
                ('pageDescription', models.TextField(default='', null=True)),
                ('pageTitle', models.TextField(default='', null=True)),
                ('pets', models.CharField(default='', max_length=3, null=True)),
                ('roommates', models.CharField(default='', max_length=10, null=True)),
            ],
        ),
    ]
