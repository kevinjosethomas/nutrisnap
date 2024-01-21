import { useState, useEffect, useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../context/GlobalState';

export default function CreateAccount() {
    const navigation = useNavigation(); 
    const { age, setAge, setDietaryRestrictions, setWeight, setCalorieTarget } = useContext(GlobalContext);


    return (
        <View style={styles.container}>
            <Text style={styles.signUpText}>Set Up Information</Text>
            <Text style={styles.text}>Age</Text>
            <View style={styles.input}>
                <TextInput
                    style={styles.textInput }
                    placeholder="Age"
                    keyboardType="numeric" 
                    onEndEditing={(event) => {
                        const ageValue = parseInt(event.nativeEvent.text, 10); 
                        if (!isNaN(ageValue)) {
                            setAge(ageValue);
                        }
                        console.log(ageValue);
                    }}
                />   
            </View>
            <View style={styles.input}>
                <TextInput
                    style={styles.textInput }
                    placeholder="Age"
                    keyboardType="numeric" 
                    onEndEditing={(event) => {
                        const ageValue = parseInt(event.nativeEvent.text, 10); 
                        if (!isNaN(ageValue)) {
                            setAge(ageValue);
                        }
                        console.log(ageValue);
                    }}
                />   
            </View>
            <TouchableOpacity  
                style={styles.button} 
            >
                <Text style={[styles.loginButtonText, styles.buttonText]}>CONTINUE</Text>
            </TouchableOpacity>
            <TouchableOpacity  
                style={styles.button} 
            >
                <Text style={[styles.loginButtonText, styles.buttonText]}>SKIP</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50,
        padding: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        alignSelf: 'flex-start',
        paddingBottom: 6,
        paddingLeft: 8,
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 14,
        marginBottom: 20,
        width: '100%',
        backgroundColor: '#d3d3d3',
    },
    textInput: {
        flex: 1,
        padding: 16,
    },
    button: {
        width: '100%',
        padding: 14,
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#4cbc80',
        borderRadius: 14,
        padding: 20,
    },
    createAccountButton: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 14,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    loginButtonText: {
        color: 'white',
    },
    createAccountButtonText: {
        color: 'black',
    },
    signUpText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 50,
    },
    title: {
        fontSize: 30,
        paddingBottom: 40,
        fontWeight: 'bold',
        color: '#4cbc80',
    }
})