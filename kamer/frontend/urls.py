from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns


from . import views

urlpatterns = [
    path('', views.home_screen_view, name='home'),
]
urlpatterns = format_suffix_patterns(urlpatterns)
