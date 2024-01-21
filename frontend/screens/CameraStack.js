import { createStackNavigator } from "@react-navigation/stack";
import { CameraScreen } from "./CameraScreen";
import { NutritionPage } from "./NutritionPage";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CameraStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screeen component={CameraScreen} />
      <Stack.Screen
        name="Nutrition Page"
        component={NutritionPage}
        options={({ navigation }) => ({
          title: "",
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              {/* <Ionicons name="chevron-back-outline" size={35} color="black" /> */}
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
