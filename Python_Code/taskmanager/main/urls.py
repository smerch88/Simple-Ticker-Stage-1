from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('about/', views.about, name='about'),

    # Auth
    path('signup', views.signupuser, name="signup"),
    # API
    path('api/signup', views.signupAPI),
    path('api/info_to_device', views.info_to_device),
    path('api/crypto_assets', views.CryptoAssetsList.as_view())

]
