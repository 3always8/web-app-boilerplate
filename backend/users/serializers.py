# serializers.py
from rest_framework import serializers
from .models import Profile
# ostSerializer
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            'username',
        ]