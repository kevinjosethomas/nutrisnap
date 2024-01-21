import { createStackNavigator } from '@react-navigation/stack';
import Tabs from '../navigation/Tabs';
import { AccountScreen, LoginScreen, OnboardingScreen } from '../screens'; // Import OnboardingScreen

export default function MainNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            detachPreviousScreen: true,
            unmountOnBlur: true,
        }}
    >
        {/* Add OnboardingScreen as the first screen */}
        <Stack.Screen 
            name="Onboarding"
            component={OnboardingScreen}
        />
        <Stack.Screen 
            name="Tabs"
            component={Tabs}
        />
        <Stack.Screen 
            name="Login"
            component={LoginScreen}
        />
        <Stack.Screen 
            name="Account"
            component={AccountScreen}
        />
    </Stack.Navigator>
  );
}

