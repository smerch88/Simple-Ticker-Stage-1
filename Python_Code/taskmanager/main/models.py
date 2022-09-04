from django.db import models


class Crypto_Asset(models.Model):
    symbol = models.CharField(max_length=20, null=True)
    avg_price = models.FloatField(null=True)

    def __str__(self):
        return self.symbol

    class Meta:
        verbose_name = 'Crypto Asset'
        verbose_name_plural = 'Crypto Assets'


class Preset(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    crypto_ass = models.ForeignKey(Crypto_Asset, on_delete=models.SET_NULL, null=True)
    coords = models.FloatField()
    text_color = models.CharField(max_length=200)
    message_text = models.TextField()

    class Meta:
        verbose_name = 'Preset'
        verbose_name_plural = 'Presets'


class Device(models.Model):
    model = models.CharField(max_length=200)
    price = models.IntegerField()
    amount = models.IntegerField()
