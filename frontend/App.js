import { StyleSheet, SafeAreaView } from "react-native";
import { GlobalProvider } from "./context/GlobalState";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './navigation/Tabs';
import {
  useFonts,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
} from "@expo-google-fonts/plus-jakarta-sans";

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
  });

  return (
    <GlobalProvider>
      <SafeAreaView className="flex-1">
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </SafeAreaView>
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
