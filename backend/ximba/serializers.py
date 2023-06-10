from rest_framework import serializers
from .models import Event, Profile, User

class ProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = Profile
    fields = ('profile_img', 'bio')

class UserSerializer(serializers.ModelSerializer):
  profile = ProfileSerializer()

  class Meta:
    model = User
    fields = ('username', 'first_name', 'last_name', 'profile')


class EventSerializer(serializers.ModelSerializer):
  user = UserSerializer()
  
  class Meta:
    model = Event
    fields = '__all__'

    