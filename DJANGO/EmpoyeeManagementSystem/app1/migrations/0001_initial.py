# Generated by Django 5.1.4 on 2024-12-23 14:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('empid', models.AutoField(primary_key=True, serialize=False)),
                ('ename', models.CharField(max_length=30)),
                ('job', models.CharField(max_length=30)),
                ('salery', models.DecimalField(decimal_places=1, max_digits=10)),
                ('phone', models.CharField(max_length=12, unique=True)),
            ],
        ),
    ]
