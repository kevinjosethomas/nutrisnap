# 🍅 NutriSnap


### NutriSnap is an intuitive nutrition tracker that seamlessly integrates into your daily life.

We won second place in the [nwHacks](https://nwhacks-2024.devpost.com) Health & Accessibility track. You can see our demo video [here](https://www.youtube.com/watch?v=4qnNvnklmWY) or view our DevPost submission [here](https://devpost.com/software/nutrition-facts). You can see our individual contributions [here](https://github.com/kevinjosethomas/nutrisnap/graphs/contributors).

## Inspiration
Every time you go to a restaurant, its highly likely that you see someone taking a picture of their food before they eat it. We wanted to create a seamless way for people to keep track of their nutritional intake, minimizing the obstacles required to be aware of the food you consume. Building on the idea that people already often take pictures of the food they eat, we decided to utilize something as simple as one's camera app to keep track of their daily nutritional intake.

## What it does
[Demo Video](https://www.youtube.com/watch?v=4qnNvnklmWY)

NutriSnap analyzes pictures of food to detect its nutritional value. After simply scanning a picture of food, it summarizes all its nutritional information and displays it to the user, while also adding it to a log of all consumed food so people have more insight on all the food they consume. NutriSnap has two fundamental features:
- scan UPC codes on purchased items and fetch its nutritional information
- detect food from an image using a public ML food-classification API and estimate its nutritional information

This information is summarized and displayed to the user in a clean and concise manner, taking their recommended daily intake values into account. Furthermore, it is added to a log of all consumed food items so the user can always access a history of their nutritional intake.

<img src="https://github.com/kevinjosethomas/nutrisnap/assets/46242684/464c2cba-f61e-4bf2-bca8-0fe6285ae469" width="200" />
<img src="https://github.com/kevinjosethomas/nutrisnap/assets/46242684/744a2a79-4749-47b6-83a4-690bcd8a31dc" width="200" />
<img src="https://github.com/kevinjosethomas/nutrisnap/assets/46242684/b702de76-710a-4e72-bb4d-e586b9b9a96c" width="200" />



## How we built it
You can see our individual contributions [here](https://github.com/kevinjosethomas/nutrisnap/graphs/contributors). 
<img width="911" alt="image" src="https://github.com/kevinjosethomas/nutrisnap/assets/46242684/95f461ff-f7d9-4ebf-8c60-903d31cee740">

The app uses React Native for its frontend and a Python Django API for its backend. If the app detects a UPC code in the photo, it retrieves nutritional information from a [UPC food nutrition API](https://world.openfoodfacts.org) and summarizes its data in a clean and concise manner. If the app fails to detect a UPC code in the photo, it forwards the photo to its Django backend, which proceeds to classify all the food in the image using another [open API](https://www.logmeal.es). All collected nutritional data is forwarded to the [OpenAI API](https://platform.openai.com/docs/guides/text-generation/json-mode) to summarize nutritional information of the food item, and to provide the item with a nutrition rating betwween 1 and 10. This data is displayed to the user, and also added to their log of consumed food.


## What's next for NutriSnap
As a standalone app, NutriSnap is still pretty inconvenient to integrate into your daily life. One amazing update would be to make the API more independent of the frontend, allowing people to sync their Google Photos library so NutriSnap automatically detects and summarizes all consumed food without the need for any manual user input.
