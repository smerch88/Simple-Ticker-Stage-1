from rest_framework import serializers
from .models import Crypto_Asset


class CryptoAssetsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crypto_Asset
        fields = ['id', 'symbol', 'avg_price']