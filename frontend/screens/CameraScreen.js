import * as Haptics from "expo-haptics";
import { TouchableOpacity, View } from "react-native";
import { useEffect, useState, useCallback } from "react";
import { AutoFocus, Camera, CameraType } from "expo-camera";
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
        if (route.params?.takePhoto) {
            onPhotoTaken();
        }
    }, [route.params?.takePhoto])
);

  const onBarCodeScanned = async (result) => {
    console.log("hello");
    camera.pausePreview();
    setScanned(true);
    const barcode = result.data;
    const { name, ingredients, nutritionString } =
      await GetNutritionInformation(barcode);

    const data = await GenerateAdvisory(name, ingredients, nutritionString);

    console.log(data);
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
      <Camera
        ref={(r) => (camera = r)}
        type={CameraType.back}
        className="flex-1 flex-col justify-end items-center py-10 relative"
        autoFocus={AutoFocus.on}
        onBarCodeScanned={scanned ? undefined : onBarCodeScanned}
      >
        <TouchableOpacity
          onPress={onPhotoTaken}
          className="flex items-center justify-center h-24 w-24 rounded-full border-8 border-white"
        >
          <View className="w-[70px] h-[70px] rounded-full bg-white"></View>
        </TouchableOpacity>
      </Camera>
    </View>
  );
}
