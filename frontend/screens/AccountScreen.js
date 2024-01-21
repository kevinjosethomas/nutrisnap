import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export default function AccountScreen() {
    const { isLoggedIn } = useContext(GlobalContext);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {!isLoggedIn ? (
                <View style={styles.centeredContainer}>
                    <Image source={require("../assets/fruits.png")} style={{height: 125, width: 125}}/>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>LOG IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <Text>Logged in.</Text>
            )}
        </View>
    );
}















const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 17,
        paddingVertical: 35,
        width: '100%'
      },
      centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 130,
        width: '100%'
    },
      button: {
        marginTop: 20,
        backgroundColor: '#4cbc80',
        paddingVertical: 16,
        borderRadius: 14,
        width: '100%',
        alignItems: 'center', 
      },
      logOutButton: {
        marginTop: 20,
        backgroundColor: 'black',
        paddingVertical: 16,
        width: '100%',
        alignItems: 'center', 
    },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
      },
      loginText: {
        textAlign: 'center',
        fontSize: 15,
      },
      titles: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
      },
      horizontalLine: {
        borderBottomColor: 'black', 
        borderBottomWidth: 1.1,
        width: '100%', 
        marginTop: 5, 
        marginBottom: 10, 
      },
      text: {
        fontSize: 18,
        fontWeight: 'light',
      }
})