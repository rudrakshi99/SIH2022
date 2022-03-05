# Generated by Django 3.2.11 on 2022-03-02 04:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('enquiry', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='PartnerDispute',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Name')),
                ('email', models.EmailField(blank=True, max_length=254, null=True, verbose_name='Email')),
                ('phone_number', models.CharField(max_length=10, verbose_name='Phone Number')),
                ('partner_id', models.CharField(max_length=10, verbose_name='Partner Id')),
                ('topic', models.PositiveIntegerField(choices=[(10, 'Financial related'), (20, 'Commercial and product related'), (30, 'Breach of contract related')])),
                ('description', models.TextField(verbose_name='Description')),
            ],
        ),
    ]