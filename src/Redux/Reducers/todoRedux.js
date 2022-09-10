import { createStore } from "redux";

const instState = {
    todos: [],
}

export const todoReducer = (state = instState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return { ...state, todos: [...state.todos, action.payload] }
        case "DEL_TODO":
            return { ...state, todos: [...state.todos.filter((el) => el.id !== action.payload)] }
        default: 
        return(state)
    }
}


export const store = createStore(todoReducer);

