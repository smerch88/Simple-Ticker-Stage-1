# Generated by Django 4.0.5 on 2022-07-08 08:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_alter_crypto_asset_options_crypto_asset_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='crypto_asset',
            name='title',
            field=models.CharField(default='Default Asset', max_length=500, verbose_name='Name The Asset'),
        ),
    ]
