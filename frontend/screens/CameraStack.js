import { createStackNavigator } from "@react-navigation/stack";
import CameraScreen from "./CameraScreen";
import NutritionPage from "./NutritionPage";

const Stack = createStackNavigator();

export default function CameraStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Camera Screen" component={CameraScreen} />
      <Stack.Screen
        name="Nutrition Page"
        component={NutritionPage}
        options={({ navigation }) => ({
          title: "",
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}
