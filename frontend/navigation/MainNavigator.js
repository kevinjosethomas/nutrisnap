import { createStackNavigator } from '@react-navigation/stack';
import Tabs from '../navigation/Tabs';
import { AccountScreen, LoginScreen, CreateAccount, GetInfoScreen } from '../screens';

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
            
            <Stack.Screen 
                name="Tabs"
                component={Tabs}
            />
            <Stack.Screen 
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen 
                name="Create Account"
                component={CreateAccount}
            />

            <Stack.Screen 
                name="Get Info"
                component={GetInfoScreen}
            />

            <Stack.Screen 
                name="Account"
                component={AccountScreen}
            />

        </Stack.Navigator>
    )
}