import { createContext, useReducer, useState } from "react";
import AppReducer from './AppReducer';

const initialState = {
    pastScans: [],
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

    return (
        <GlobalContext.Provider value = {{
            pastScans: state.pastScans,
            addScan,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


