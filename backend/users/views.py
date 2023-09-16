from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer
from .models import User

# Create your views here.
class GetUsers(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)