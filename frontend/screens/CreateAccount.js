import { useState, useEffect, useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../context/GlobalState';

export default function CreateAccount() {
    const navigation = useNavigation(); 
    const [showPassword, setShowPassword] = useState(false);
    const [info, setInfo] = useState({
        email: '',
        password: '',
    });
    const [validation, setValidation] = useState({
        isEmailValid: true,
        isPasswordValid: true
    });

    const isFormValid = validation.isEmailValid && validation.isPasswordValid;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    const handleSignUp = () => {
        setInfo({ email: '', password: '' });
        navigation.navigate("Tabs");    
    };

    const validateEmail = (email) => {
        setValidation((prev) => ({ ...prev, isEmailValid: emailRegex.test(email) }));
        setInfo((prev) => ({ ...prev, email }));
    };

    const validatePassword = (password) => {
        setValidation((prev) => ({ ...prev, isPasswordValid: password.length >= 7 }));
        setInfo((prev) => ({ ...prev, password }));
    };

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    useEffect(() => {
        validateEmail(info.email);
        validatePassword(info.password);
    }, [info.email, info.password]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calorie Tracker</Text>
            <Text style={styles.signUpText}>Sign Up</Text>
            <Text style={styles.text}>Email</Text>
            <TextInput
                style={styles.emailInput}
                placeholder="Email"
                value={info.email}
                onChangeText={validateEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <Text style={styles.text}>Password</Text>
            <View style={styles.passwordInputWrapper}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    value={info.password}
                    onChangeText={validatePassword}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity 
                    onPress={handleTogglePassword}
                    style={styles.toggleButton}
                >
                    <Text style={styles.passwordText}>{showPassword ? 'Hide' : 'Show'}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity  
                style={[styles.loginButton, styles.button, !isFormValid && styles.disabledButton]} 
                onPress={handleSignUp}
                disabled={!isFormValid}
            >
                <Text style={[styles.loginButtonText, styles.buttonText]}>CONTINUE</Text>
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
    emailInput: {
        width: '100%',
        borderRadius: 15,
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#d3d3d3',
    },
    passwordInputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 14,
        marginBottom: 20,
        width: '100%',
        backgroundColor: '#d3d3d3',
    },
    passwordInput: {
        flex: 1,
        padding: 16,
    },
    toggleButton: {
        padding: 16,
    },
    button: {
        width: '100%',
        padding: 14,
        alignItems: 'center',
        marginBottom: 10,
    },
    loginButton: {
        backgroundColor: '#4cbc80',
        borderRadius: 14,
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
    errorBorder: {
        borderColor: '#8B0000',
    },
    disabledButton: {
        backgroundColor: '#a9a9a9',
    },
    passwordText: {
        fontSize: 12,
        color: '#222222',
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