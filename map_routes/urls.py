from django.urls import path, include
from . import views

urlpatterns = [path("", views.index),
               path("search_route/", views.search_route)
               ]