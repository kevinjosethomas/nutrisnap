import { createStackNavigator } from '@react-navigation/stack';
import { CameraScreen } from './CameraScreen';

export default function CameraStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screeen component={CameraScreen}/>
            
        </Stack.Navigator>
    )
}