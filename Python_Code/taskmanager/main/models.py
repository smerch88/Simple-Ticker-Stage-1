from unittest.util import _MAX_LENGTH
from django.db import models

class Crypto_Asset(models.Model):
    title = models.CharField('Name The Asset', max_length=500, default="Default Asset")
    description = models.TextField('Asset Description', max_length=1000, default="It is my awesom setup!")
    crypto_value_1 = models.CharField('Crypto_1', max_length=10, default="BTC")
    crypto_value_2 = models.CharField('Crypto_2', max_length=10, default="BTC")
    crypto_value_3 = models.CharField('Crypto_3', max_length=10, default="BTC")
    crypto_value_4 = models.CharField('Crypto_4', max_length=10, default="BTC")
    crypto_value_5 = models.CharField('Crypto_5', max_length=10, default="BTC")
    crypto_value_6 = models.CharField('Crypto_6', max_length=10, default="BTC")
    crypto_value_7 = models.CharField('Crypto_7', max_length=10, default="BTC")
    crypto_value_8 = models.CharField('Crypto_8', max_length=10, default="BTC")
    crypto_value_9 = models.CharField('Crypto_9', max_length=10, default="BTC")
    crypto_value_10 = models.CharField('Crypto_10', max_length=10, default="BTC")
   
    def __str__(self):
        return self.title

    class Meta:
        verbose_name='Crypto Asset'
        verbose_name_plural='Crypto Assets'