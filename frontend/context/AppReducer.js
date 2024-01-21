function AppReducer(state, action) {
    switch (action.type) {
        case 'ADD_SCAN': 
            return {
                ...state,
                pastScans: [action.payload, ...state.pastScans],
            };
        case 'SET_AGE':
            return {
                ...state,
                age: action.payload,
            };
        case 'SET_DIETARY_RESTRICTIONS':
            return {
                ...state,
                dietaryRestrictions: [action.payload, ...state.dietaryRestrictions],
            };
        case 'SET_WEIGHT': 
            return {
                ...state,
                weight: action.payload,
            };
        case 'SET_CALORIE_TARGET': 
            return {
                ...state,
                calorieTarget: action.payload,
            };
        default:
            return state;
    }
}