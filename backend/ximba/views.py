from json import loads

from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.utils.timezone import localtime
from django.views.decorators.http import require_POST
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ObjectDoesNotExist

from .serializers import *
from .models import *
from .utils import *

@csrf_exempt
def confirm_code(request, username, code):
    try:
        user = User.objects.get(username=username.strip())
    except ObjectDoesNotExist:
        return JsonResponse({'error': f'User ({username}) is not found'}, status=404)
    else:
        if user.email_code == code: 
            return JsonResponse({'success': 'Code matches'}, status=200)  
        else: 
            return JsonResponse({'error': 'Code does not match'}, status=400)


@require_POST
@csrf_exempt
def confirm_email(request, username):
    data = loads(request.body)
    user = User.objects.get(username=username.strip())

    if int(data.get('code')) != user.email_code:
        return JsonResponse({'error': 'Code does not match'}, status=400)

    time_difference = localtime() - user.code_generation_date
    if (time_difference).seconds > 916: 
        user.email_code = generate_code()
        user.code_generation_date = localtime()
        user.save()
        
        # TODO: Resend code to email

        return JsonResponse({'error': f'Code has expired. A new code has been sent to {user.email}'}, status=400)

    user.is_email_confirmed = True
    user.save()

    serializer = UserSerializer(user)

    # login(request, user)

    return JsonResponse(serializer.data, status=200)

class EventAPIView(APIView):
    def get(self, request):
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

@require_POST
@csrf_exempt
def register_view(request):
    data = loads(request.body)
    password = data.get('password')
    username = data.get('username')

    # Ensure form data is not empty
    for val in data.values():
        if not val:
            return JsonResponse({'error': 'Form empty'}, status=400)

    # Validate password
    if not (check_upper(password) and check_lower(password) and check_digit(password)):
        return JsonResponse({'error': 'Password invalid'}, status=400)

    # Ensure that password is the same as confirm-password
    if password != data.get('confirmPassword'):
        return JsonResponse({'error': 'Password does not match'}, status=400)

    # Ensure email is not taken
    if User.objects.filter(email=data.get('email')).exists():
        return JsonResponse({'error': 'Email is taken'}, status=409)

    # Ensure username is not taken
    if User.objects.filter(username=data.get('username')).exists():
        return JsonResponse({'error': 'Username is already taken'}, status=409)

    profile = Profile.objects.create(bio='This is a default bio, feel free to edit it.')

    user = User.objects.create_user(
        first_name=data.get('firstName').capitalize(),
        last_name=data.get('lastName').capitalize(),
        username=data.get('username').lower(),
        email=data.get('email'),
        password=password,
        email_code=generate_code(),
        code_generation_date=localtime(),
        profile=profile,
    )

    user.save()

    # TODO: Send email to the user

    request.session['username'] = username

    return JsonResponse({'message': 'User registered'}, status=200)
