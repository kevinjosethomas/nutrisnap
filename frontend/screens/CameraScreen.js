import * as Haptics from "expo-haptics";
import { useEffect, useState, useCallback } from "react";
import { AutoFocus, Camera, CameraType } from "expo-camera";
import { View, Text } from "react-native";
import {
  useRoute,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import { Image } from "expo-image";
import BannerBackground from "../assets/banner-background.png";

import { GenerateAdvisory } from "../api/OpenAI";
import { GetNutritionInformation } from "../api/BarCode";

export default function CameraScreen() {
  const navigation = useNavigation();

  let camera;
  const [scanned, setScanned] = useState(false);
  const [nutrition, setNutrition] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    requestPermission();
  }, []);

  const route = useRoute();

  useFocusEffect(
    useCallback(() => {
      if (route.params?.takePhoto) {
        onPhotoTaken();
      }
    }, [route.params?.takePhoto])
  );

  const onBarCodeScanned = async (result) => {
    camera.pausePreview();
    setScanned(true);
    const barcode = result.data;
    const { name, ingredients, nutritionString } =
      await GetNutritionInformation(barcode);

    const data = await GenerateAdvisory(name, ingredients, nutritionString);

    setNutrition({
      ...data,
    });
  };

  const onPhotoTaken = async () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    const photo = await camera.takePictureAsync({
      base64: true,
      exif: true,
      compress: 0,
    });

    navigation.navigate("Nutrition Page");
  };

  return (
    <View className="flex-1">
      {nutrition && (
        <View className="absolute gap-y-4 px-6 w-screen h-screen top-0 left-0 z-10 flex-1 flex-col justify-start items-center bg-white">
          <View className="flex flex-row items-center justify-between">
            <Text
              className="font-bold text-2xl"
              style={{ fontFamily: "PlusJakartaSans_700Bold" }}
            >
              Nutrition
            </Text>
          </View>
          <View className="relative flex flex-col overflow-hidden w-full bg-g-700 rounded-2xl">
            <Image
              source={BannerBackground}
              contentFit="cover"
              className="absolute top-0 left-0 w-full h-full"
            />
            <View className="gap-y-1 flex flex-col p-6">
              <Text
                className="text-xl text-white"
                style={{ fontFamily: "PlusJakartaSans_700Bold" }}
              >
                Nutrition Summary
              </Text>
              <Text className="text-white">{nutrition.description}</Text>
            </View>
          </View>
        </View>
      )}
      <Camera
        ref={(r) => (camera = r)}
        type={CameraType.back}
        className="flex-1 flex-col justify-end items-center py-10 relative"
        autoFocus={AutoFocus.on}
        onBarCodeScanned={scanned ? undefined : onBarCodeScanned}
      />
    </View>
  );
}
