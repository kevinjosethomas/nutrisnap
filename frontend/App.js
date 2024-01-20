import { StyleSheet, Text, View, Image } from 'react-native';
import { GlobalProvider } from './context/GlobalState';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen } from './screens';
import { Platform } from 'react-native';


export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <GlobalProvider>
      <NavigationContainer>
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
                  source={require("./assets/PastScanTab.png")}
                  style={{height: 30, width: 30}}
                />
              )

            }}
          />

          {/* Profile Screen */}
          <Tab.Screen 
            name="Scrn"
            component={ProfileScreen}
            options = {{
              title: "Scan",
              tabBarIcon: () => (
                <Image 
                  source={require("./assets/CameraTab.png")}
                  style={{height: 25, width: 25}}
                />
              )

            }}
          />

          <Tab.Screen 
            name="Account"
            component={ProfileScreen}
            options = {{
              title: "Acount",
              tabBarIcon: () => (
                <Image 
                  source={require("./assets/ProfileTab.png")}
                  style={{height: 24, width: 24}}
                />
              )
            }}
          />      


        </Tab.Navigator>
      </NavigationContainer>
    </GlobalProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
