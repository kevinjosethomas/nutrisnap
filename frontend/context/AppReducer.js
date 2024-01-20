function AppReducer(state, action) {
    switch (action.type) {
        case 'ADD_SCAN': 
            return {
                ...state,
                pastScans: [action.payload, ...state.pastScans],
            }
    }
}