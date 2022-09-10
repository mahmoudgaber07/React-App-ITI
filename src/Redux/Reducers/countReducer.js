import { createStore } from "redux";

const initialState = {
    count: 0,
}

export const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT_COUNT":
            return {...state, count: state.count + action.payload}
        case "DECREMENT_COUNT":
            return {...state, count: state.count - action.payload}
        default:
            return state
    }
}
export const store = createStore(countReducer);

