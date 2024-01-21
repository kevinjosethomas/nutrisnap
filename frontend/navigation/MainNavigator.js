import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "../navigation/Tabs";
import {
  AccountScreen,
  CreateAccount,
  LoginScreen,
  OnboardingScreen,
} from "../screens";

export default function MainNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Create Account" component={CreateAccount} />
      <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  );
}
