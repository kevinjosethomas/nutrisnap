import * as Haptics from "expo-haptics";
import { useEffect, useState, useCallback } from "react";
import { AutoFocus, Camera, CameraType } from "expo-camera";
import { TouchableOpacity, View, Text } from "react-native";
import { useRoute, useFocusEffect } from "@react-navigation/native";

import { GenerateAdvisory } from "../api/OpenAI";
import { GetNutritionInformation } from "../api/BarCode";

export default function CameraScreen() {
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
      if (route.params?.takePxhoto) {
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
  };

  return (
    <View className="flex-1">
      {nutrition && (
        <View className="absolute w-screen h-screen top-0 left-0 z-10 flex-1 flex-col justify-center items-center bg-white"></View>
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
