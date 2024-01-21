
import requests
api_user_token = '2aea769e6a472ce9762da57da20a4f322a0dc613'
headers = {'Authorization': 'APIUser_Carson ' + api_user_token}

import requests
import os
from PIL import Image
import piexif

# Load image
img_path = 'imgs/brownies.jpg'
im = Image.open(img_path)
path = 'imgs/brownies.jpg'

# [IMPORTANT to keep image orientation] get exif information
exif_dict = piexif.load(im.info["exif"])
exif_bytes = piexif.dump(exif_dict)
rgb_im = im.convert('RGB')

# get the size of the image in MB
size_mb = os.path.getsize(img_path) >> 20
width, height = rgb_im.size

# iteratively reduce the image a percentatge of its size until it is smaller than 1MB
while(size_mb >= 1):

        # resize th image 75%
        size=int(width*0.75), int(height*0.75)
        rez_image = rgb_im.resize(size, Image.ANTIALIAS)

        # save the resized image
        rez_image.save(path, exif=exif_bytes)

        # get the size in MB
        size_mb = os.path.getsize(path) >> 20


# Identify 

import json
# recognition/combo said brownies were chili

url = 'https://api.logmeal.es/v2/recognition/combo'
response = requests.post(url,files={'image': open('imgs/brownies.jpg', 'rb')}, headers=headers)
#print(resp)
print(response.text)


