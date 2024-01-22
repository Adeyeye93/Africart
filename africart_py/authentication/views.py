from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import permissions
from rest_framework_simplejwt.settings import api_settings
from rest_framework.response import Response
from rest_framework.views import APIView

class RegisterView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = User.objects.create_user(username=username, password=password)
        user.save()

        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)

        return Response({'token': token})
