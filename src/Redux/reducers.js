//all reducer
import { countReducer } from "./Reducers/countRedux";
import { todoReducer } from "./Reducers/todoRedux";
import { combineReducers } from 'redux';
import { Loadereducers } from "./Reducers/loaderReducer";
const reducers = combineReducers({
    countRed: countReducer ,
    todosRed: todoReducer,
    loadRed: Loadereducers,
});
export default reducers;
