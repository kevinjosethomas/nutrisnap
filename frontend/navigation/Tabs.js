import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen, CameraScreen } from '../screens';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
        style={{
            top: -20,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#e32f45', 
        }}>
            {children}
        </View>
    </TouchableOpacity>
)

export default function Tabs() {
    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#ffffff',
                borderRadius: 15,
                height: 90,
                ...styles.shadow
            }
        }}
    >
        <Tab.Screen 
        name="Past Scans"
        component={ProfileScreen}
        options = {{
            title: "Past Scans",
            tabBarIcon: ({ focused }) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Image 
                    source={require("../assets/PastScanTab.png")}
                    resizeMode='contain'
                    style={{
                        width: 35,
                        height: 35,
                        tintColor: focused ? '#e32f45' : "#748c94"
                    }}
                /> 
                <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                    PAST SCANS
                </Text>
            </View> 
            )
        }}
        />

        <Tab.Screen 
            name="Scan" 
            component={CameraScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <Image 
                        source={require("../assets/CameraTab.png")}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: '#fff',
                        }}
                    />
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                )
            }}
        />

        {/* <Tab.Screen 
            name="Scan"
            component={CameraScreen}
            options = {{
              title: "Scan",
              tabBarIcon: ({ focused }) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                   <Image 
                        source={require("../assets/CameraTab.png")}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#e32f45' : "#748c94"
                        }}
                    /> 
                    <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                        SCAN
                    </Text>
                </View> 
              )
            }}
          /> */}

        <Tab.Screen 
            name="Account"
            component={ProfileScreen}
            options = {{
              title: "Account",
              tabBarIcon: ({ focused }) => (
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                   <Image 
                        source={require("../assets/ProfileTab.png")}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#e32f45' : "#748c94"
                        }}
                    /> 
                    <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                        ACCOUNT
                    </Text>
                </View> 
              )
            }}
          />

        </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})
