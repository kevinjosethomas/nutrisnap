import { View } from "react-native";
import * as Haptics from "expo-haptics";
import { AutoFocus, Camera, CameraType } from "expo-camera";
import { useEffect, useState, useCallback } from "react";
import {
  useRoute,
  useFocusEffect,
  useNavigation,
  useIsFocused,
} from "@react-navigation/native";

import { GenerateAdvisory } from "../api/OpenAI";
import { GetNutritionInformation } from "../api/BarCode";

export default function CameraScreen() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [camera, setCamera] = useState();
  const [scanned, setScanned] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    requestPermission();
  }, []);

  //Carbs 225-325 grams
  //Fat 44-78 grams
  //Fiber 25-30 grams
  //Proteins 60 grams or 0.8 x bodyweight (kg)
  //Salt 2000mg
  //sugar 25-36 depending on male/female

  const route = useRoute();

  useFocusEffect(
    useCallback(() => {
      setScanned(false);
      if (route.params?.takePhoto) {
        onPhotoTaken();
      }
    }, [route.params?.takePhoto])
  );

  const onBarCodeScanned = async (result) => {
    setScanned(true);
    camera.pausePreview();
    const barcode = result.data;
    const d = await GetNutritionInformation(barcode);

    if (!d) {
      camera.resumePreview();
      setScanned(false);
      return;
    }

    const { name, ingredients, nutrition, nutritionString } = d;

    const data = await GenerateAdvisory(name, ingredients, nutritionString);

    navigation.navigate("Nutrition Page", {
      ...data,
      name,
      ingredients,
      nutrition,
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
      {isFocused && (
        <Camera
          ref={(r) => setCamera(r)}
          type={CameraType.back}
          autoFocus={AutoFocus.on}
          className="flex-1 flex-col justify-end items-center py-10 relative"
          onBarCodeScanned={scanned ? undefined : onBarCodeScanned}
        />
      )}
    </View>
  );
}
