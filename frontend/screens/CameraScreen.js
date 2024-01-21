import { TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import * as Haptics from "expo-haptics";
import { AutoFocus, Camera, CameraType } from "expo-camera";

import { GetNutritionInformation } from "../api/BarCode";

export default function CameraScreen() {
  let camera;
  const [scanned, setScanned] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    requestPermission();
  }, []);

  const onBarCodeScanned = async (result) => {
    setScanned(true);
    const barcode = result.data;
    const data = await GetNutritionInformation(barcode);

    console.log(data[0].ingredients);
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
