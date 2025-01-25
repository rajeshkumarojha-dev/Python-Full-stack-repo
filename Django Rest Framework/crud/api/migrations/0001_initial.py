# Generated by Django 5.1.4 on 2025-01-25 07:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('roll', models.IntegerField()),
                ('city', models.CharField(max_length=20)),
            ],
            options={
                'db_table': 'student',
            },
        ),
    ]
