# Generated by Django 5.1.6 on 2025-02-16 00:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='username',
            field=models.CharField(max_length=150, null=True, unique=True),
        ),
    ]
