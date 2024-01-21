import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen, CameraScreen } from '../screens';
import { Platform, Image } from 'react-native';

export default function Tabs() {
    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
          screenOptions = {{
            tabBarInactiveTintColor: 'grey',
            tabBarActiveTintColor: 'black',
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 11,
              fontFamily: Platform.OS === 'android' ? 'Roboto' : 'System',
              fontWeight: 'bold',
            }
          }}
        >
          <Tab.Screen 
            name="Past Scans"
            component={ProfileScreen}
            options = {{
              title: "Past Scans",
              tabBarIcon: () => (
                <Image 
                  source={require("../assets/PastScanTab.png")}
                  style={{height: 30, width: 30}}
                />
              )

            }}
          />

          {/* Profile Screen */}
          <Tab.Screen 
            name="Scrn"
            component={CameraScreen}
            options = {{
              title: "Scan",
              tabBarIcon: () => (
                <Image 
                  source={require("../assets/CameraTab.png")}
                  style={{height: 25, width: 25}}
                />
              )

            }}
          />

          <Tab.Screen 
            name="Account"
            component={ProfileScreen}
            options = {{
              title: "Account",
              tabBarIcon: () => (
                <Image 
                  source={require("../assets/ProfileTab.png")}
                  style={{height: 24, width: 24}}
                />
              )
            }}
          />      


        </Tab.Navigator>
  )
}
