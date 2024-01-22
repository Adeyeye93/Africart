from django.urls import path
from authentication import views

urlpatterns = [
    path('Buyer_login/endpoint', views.RegisterView.as_view(), name="register_seller")
]