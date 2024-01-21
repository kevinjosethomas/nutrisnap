import { useEffect } from "react";
import { Text, View } from "react-native";
import { Camera, CameraType } from 'expo-camera';

export default function CameraScreen() {
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    requestPermission();
  }, [])

  return (
    <View style={{flex: 1}}>
      <Text>Hello</Text>
        <Camera type={CameraType.back} style={{flex: 1, height: null, width: null}}>
          <View></View></Camera>
    </View>
  )
}
