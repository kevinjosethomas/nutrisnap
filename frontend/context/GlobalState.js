import { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

const initialState = {
    pastScans: [],
    age: undefined,
    weight: undefined,
    dietaryRestrictions: [],
    calorieTarget: undefined,
    isLoggedIn: false,
    theme: 'dark',
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addScan(scanInfo) {
        dispatch({
            type: 'ADD_SCAN',
            payload: scanInfo,
        });
    }

    const setAge = (age) => {
        dispatch({
            type: 'SET_AGE',
            payload: age,
        });
    };

    function setDietaryRestrictions(restrictions) {
        dispatch({
            type: 'SET_DIETARY_RESTRICTIONS',
            payload: restrictions,
        })
    }

    function setWeight(weight) {
        dispatch({
            type: 'SET_WEIGHT',
            payload: weight,
        })
    }

    function setCalorieTarget(calorieTarget) {
        dispatch({
            type: 'SET_CALORIE_TARGET',
            payload: calorieTarget,
        })
    }

    function setLogIn(isLoggedIn) {
        dispatch({
            type: "SET_IS_LOGGED_IN",
            payload: isLoggedIn,
        })
    }

    function toggleTheme() {
        dispatch({
            type: 'TOGGLE_THEME',
        });
    }

    return (
        <GlobalContext.Provider 
            value = {{
                theme: state.theme,
                age: state.age,
                weight: state.weight,
                dietaryRestrictions: state.dietaryRestrictions,
                calorieTarget: state.calorieTarget,
                pastScans: state.pastScans,
                setAge,
                setDietaryRestrictions,
                setWeight,
                setCalorieTarget,
                addScan,
                setLogIn,
                toggleTheme,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}


