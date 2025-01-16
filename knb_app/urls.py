from django.urls import path, include

from . import views

app_name = "knb_app"

urlpatterns = [
    path("", views.HomeView.as_view(), name="home"),
    path("board", views.BoardView.as_view(), name="board")
]
