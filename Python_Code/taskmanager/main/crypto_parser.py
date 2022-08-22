from .models import Crypto_Asset
import requests

result = requests.request(
    'GET',
    'https://api.binance.com/api/v3/ticker/price'
)
list_of_values = result.json()


for i in range(len(list_of_values)):
    if list_of_values[i]['symbol'][-4:]=='USDT':
        Crypto_Asset.objects.create(symbol=list_of_values[i]['symbol'], avg_price=list_of_values[i]['price'])

