import { createStackNavigator } from "@react-navigation/stack";
import CameraScreen from "./CameraScreen";
import NutritionPage from "./NutritionPage";
import Ionicons from "react-native-vector-icons/Ionicons";

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
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="chevron-back-outline" size={35} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
    backButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
    },
  
  });