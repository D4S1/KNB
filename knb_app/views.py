from django.shortcuts import render
from django.views import View


# Create your views here.
class HomeView(View):

    def get(self, request):
        return render(request, "knb_app/home.html")


class BoardView(View):

    def get(self, request):
        return render(request, "knb_app/board.html")
