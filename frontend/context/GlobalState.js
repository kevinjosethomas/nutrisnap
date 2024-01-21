import { createContext, useReducer, useState } from "react";
import AppReducer from './AppReducer';

const initialState = {
    pastScans: [],
    age: undefined,
    weight: undefined,
    dietaryRestrictions: undefined,
    calorieTarget: undefined,
}

const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addScan(scanInfo) {
        dispatch({
            type: 'ADD_SCAN',
            payload: x,
        });
    }

    function setAge(age) {
        dispatch({
            type: 'SET_AGE',
            payload: age,
        })
    }

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

    return (
        <GlobalContext.Provider value = {{
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
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


