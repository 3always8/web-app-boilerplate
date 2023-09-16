from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ProfileSerializer
from .models import Profile

# Create your views here.
class GetProfiles(APIView):
    def get(self, request):
        users = Profile.objects.all()
        print(users)
        serializer = ProfileSerializer(users, many=True)
        return Response('serializer.data')