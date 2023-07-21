from django.urls import path
from .views import *

urlpatterns = [
  path('confirm/<str:username>', confirm_email, name='confirm-email'),
  path('confirm-code/<str:username>/<int:code>', confirm_code, name='confirm-code'),
  path('events/', EventAPIView.as_view(), name='events-list'),
  path('register/', register_view, name='register'),
]