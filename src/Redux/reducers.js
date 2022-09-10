//all reducer
import { countReducer } from "./Reducers/countReducer";
import { todoReducer } from "./Reducers/todoReducer";
import { combineReducers } from 'redux';
import { Loadereducers } from "./Reducers/loaderReducer";
const reducers = combineReducers({
    countRed: countReducer ,
    todosRed: todoReducer,
    loadRed: Loadereducers,
});
export default reducers;
