from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .serializers import ImageUploadSerializer

@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world'})
"""
### need to figure out 
@api_view(['GET'])
def process_img(request):
    return Response(process_image(image))
    """
"""
@api_view(['POST'])
class ProcessImageView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ImageUploadSerializer(data=request.data)
        if serializer.is_valid():
            # Process the image here using Pillow or any other library
            processed_image_data = process_image_function(serializer.validated_data['image'])
            # Return the processed image data in the response
            return Response({'success': True, 'processed_image': processed_image_data})
        else:
            return Response({'success': False, 'error': 'Invalid input data'}, status=status.HTTP_400_BAD_REQUEST)
"""

@api_view(['POST'])
def process(request):
    return Response({'image': request.data})