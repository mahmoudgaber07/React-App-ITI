import { createStore } from "redux";
const INITIAL_VALUE = {
    isLoading: false,
}
export const Loadereducers = (state = INITIAL_VALUE, action) => { 
    //check action type 
    switch (action.type) {
        case 'Set_Loader':
            return {         
                ...state,
                isLoading: action.payload
            }
        default:
            return state;  
    }
}

export const store = createStore(Loadereducers);
