//all reducer
import { countReducer } from "./countRedux";
import { todoReducer } from "./todoRedux";
import { combineReducers } from 'redux';
const reducers = combineReducers({
    countRed: countReducer ,
    todosRed: todoReducer ,
});
export default reducers;
