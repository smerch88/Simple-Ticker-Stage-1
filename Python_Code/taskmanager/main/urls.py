from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    # API
    path('api/info_to_device', views.info_to_device),
    path('api/crypto_assets', views.CryptoAssetsList.as_view()),
    path('api/update_ticker_setup', views.update_ticker_setup),

]
