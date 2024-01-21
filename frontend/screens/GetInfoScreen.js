import { useState, useEffect, useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../context/GlobalState';
import { SelectList } from 'react-native-dropdown-select-list';

export default function CreateAccount() {
    const navigation = useNavigation(); 
    const { weight, age, setAge, setDietaryRestrictions, setWeight, setCalorieTarget } = useContext(GlobalContext);

    const dietaryOptions = [
        { key: '1', value: 'Vegetarian' },
        { key: '2', value: 'Vegan' },
    ];

    const handleAgeChange = () => {
        (event) => {
            const ageValue = parseInt(event.nativeEvent.text, 10); 
            if (!isNaN(ageValue)) {
                setAge(ageValue);
            }
            console.log(age);
        }
    }

    const handleWeightChange = () => {
        (event) => {
            const weightValue = parseInt(event.nativeEvent.text, 10); 
            if (!isNaN(weightValue)) {
                setWeight(weightValue);
            }
            console.log(weight);
        }
    }

    const handleCalorieTarget = () => {
        (event) => {
            const calorieTargetValue = parseInt(event.nativeEvent.text, 10); 
            if (!isNaN(calorieTargetValue)) {
                setCalorieTarget(calorieTargetValue);
            }
        }
    }

    const handleDietarySelection = (selectedItem) => {
        setDietaryRestrictions(selectedItem);
    };

    const handleContinue = () => {
        navigation.navigate("Tabs");    
    };  

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Text style={styles.signUpText}>Set Up Information</Text>
                <Text style={styles.text}>Age</Text>
                <View style={styles.input}>
                    <TextInput
                        style={styles.textInput }
                        placeholder="Age"
                        keyboardType="numeric" 
                        onChange={handleAgeChange}
                    />   
                </View>
                <Text style={styles.text}>Weight</Text>
                <View style={styles.input}>
                    <TextInput
                        style={styles.textInput }
                        placeholder="Weight"
                        keyboardType="numeric" 
                        onChange={handleWeightChange}
                    />   
                </View>
                <Text style={styles.text}>Calorie Target</Text>
                <View style={styles.input}>
                    <TextInput
                        style={styles.textInput }
                        placeholder="Calorie Target"
                        keyboardType="numeric" 
                        onChange={handleCalorieTarget}
                    />   
                </View>
                <Text style={styles.text}>Dietary Restrictions</Text>
                <View style={styles.selectListContainer}>
                    <SelectList 
                        setSelected={handleDietarySelection} 
                        data={dietaryOptions}
                        placeholder="Select Dietary Restriction"
                        boxStyles={styles.selectList} 
                    />
                </View>
                <TouchableOpacity  
                    style={styles.button} 
                    onPress={handleContinue}
                >
                    <Text style={[styles.loginButtonText, styles.buttonText]}>CONTINUE</Text>
                </TouchableOpacity>
                <TouchableOpacity  
                    style={styles.button} 
                    onPress={handleContinue}
                >
                    <Text style={[styles.loginButtonText, styles.buttonText]}>SKIP</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
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
    },
    selectListContainer: {
        width: '100%',
        marginBottom: 20,
        overflow: 'hidden', 
    },
    selectList: {
        backgroundColor: '#d3d3d3',
        paddingHorizontal: 70, 
        paddingVertical: 10, 
    },
})