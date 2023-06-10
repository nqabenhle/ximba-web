from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.timezone import localtime

class User(AbstractUser):
  email_code = models.IntegerField(default=000000)
  code_generation_date = models.DateTimeField(auto_created=True, default=localtime)
  is_email_confirmed = models.BooleanField(default=False)
  reset_password = models.TextField(max_length=20, blank=True, null=True)
  profile = models.OneToOneField('Profile', on_delete=models.CASCADE, related_name='user', null=True)

  def __str__(self):
    return self.username

class Profile(models.Model):
  profile_img = models.ImageField(upload_to='ximba/static/ximba/images/profiles', default='/static/ximba/images/profiles/default.png')
  bio = models.TextField(max_length=200, blank=True, null=True)

  def __str__(self) -> str:
    return self.bio
  
class Event(models.Model):
  user = models.ForeignKey(User, models.CASCADE, related_name='user_event')
  identifier = models.CharField(max_length=100)
  title = models.CharField(max_length=50)
  description = models.CharField(max_length=500)
  cover = models.ImageField(upload_to='ximba/static/ximba/images/events/covers', null=True, blank=True)
  location = models.CharField(max_length=100)
  city = models.CharField(max_length=50, default='Pretoria')
  suburb = models.CharField(max_length=50, default='Hatfield')
  start_datetime = models.DateTimeField()
  end_datetime = models.DateTimeField()
  ticket_purchase_deadline = models.DateTimeField(blank=True, null=True)
  immediate_payment = models.BooleanField(blank=True, null=True)
  public = models.BooleanField(default=True)
  ticket_access = models.BooleanField(default=False)
  attendees_allowed = models.IntegerField(null=True, blank=True)
  attendees = models.IntegerField(default=0)
  ticket_price = models.FloatField(default=0)
  keywords = models.CharField(max_length=500)
  category = models.CharField(max_length=60)
  
  def __str__(self):
    return f'{self.title} posted by {self.user.username} ({self.category}): {"Public" if self.public else "Private"}'