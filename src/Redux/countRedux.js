import { createStore } from "redux";

const INCREMENT_COUNT = "INCREMENT_COUNT"
const DECREMENT_COUNT = "DECREMENT_COUNT"
export const incrementCount = (payload) => {
    return (
        {
            type: INCREMENT_COUNT ,
            payload
        }
    )
}
export const decrementCount = (payload) => {
    return (
        {
            type: DECREMENT_COUNT,
            payload
        }
    )
}

const initialState = {
    count: 0,
}

export const countReducer = (state = initialState, action) => {
    if (action.type === INCREMENT_COUNT) {
        return {...state, count: state.count + action.payload}
    }
    if (action.type === DECREMENT_COUNT) {
        return {...state, count: state.count - action.payload}
    }
    //to return instial value after refresh
        return (state);
}
export const store = createStore(countReducer);

