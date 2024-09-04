from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register_view, name='register'),  # Sign up page
    path('login/', views.login_view, name='login'),  # Login page
    path('homepage/', views.home_view, name='homepage'),  # Homepage
]
