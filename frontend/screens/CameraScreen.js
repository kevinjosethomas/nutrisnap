import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { AutoFocus, Camera, CameraType } from "expo-camera";

import { GetNutritionInformation, ParseNutrition } from "../api/BarCode";

export default function CameraScreen() {
  const [scanned, setScanned] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const onBarCodeScanned = async (result) => {
    console.log("located!!");
    setScanned(true);
    const barcode = result.data;
    const data = await GetNutritionInformation(barcode);

    console.log(data[0].ingredients);
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <View className="flex-1">
      <Text>Hello</Text>
      <Camera
        type={CameraType.back}
        className="flex-1"
        autoFocus={AutoFocus.on}
        onBarCodeScanned={scanned ? undefined : onBarCodeScanned}
      ></Camera>
    </View>
  );
}
