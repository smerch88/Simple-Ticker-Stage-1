from django.db import models


class Crypto_Asset(models.Model):
    symbol = models.CharField(max_length=20, null=True)
    avg_price = models.FloatField(null=True)

    def __str__(self):
        return self.symbol

    class Meta:
        verbose_name = 'Crypto Asset'
        verbose_name_plural = 'Crypto Assets'


class Customer(models.Model):
    name = models.CharField(max_length=200, null=True)
    phone = models.CharField(max_length=200, null=True)
    email = models.CharField(max_length=200, null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.name


class Tag(models.Model):
    name = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    CATEGORY = (
        ('Indoor', 'Indoor'),
        ('Out Door', 'Out Door'),
    )

    name = models.CharField(max_length=200, null=True)
    price = models.FloatField(null=True)
    category = models.CharField(max_length=200, null=True, choices=CATEGORY)
    description = models.CharField(max_length=200, null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    tags = models.ManyToManyField(Tag)

    def __str__(self):
        return self.name


class Order(models.Model):
    STATUS = (
        ('Pending', 'Pending'),
        ('Out for delivery', 'Out for delivery'),
        ('Delivered', 'Delivered'),
    )

    customer = models.ForeignKey(Customer, null=True, on_delete=models.SET_NULL)
    product = models.ForeignKey(Product, null=True, on_delete=models.SET_NULL)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    status = models.CharField(max_length=200, null=True, choices=STATUS)
    note = models.CharField(max_length=1000, null=True)

    def __str__(self):
        return self.product.name


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
