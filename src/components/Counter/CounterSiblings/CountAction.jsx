import { useDispatch } from "react-redux";
import { incrementCount,decrementCount } from '../../../Redux/Actions/countActions';

const CountAction = () => {
        //(useDispatch) invoke action
        const dispatch = useDispatch();
        //actions from redux
        //invoke redux action function increment
        const increment = () => {
            dispatch(incrementCount(1))
        }
        //invoke redux action function decrement 
        const decrement = () => {
        dispatch(decrementCount(1))
    }
    return (
        <div>
            <button onClick={increment} className="btnInc">+</button>
            <button onClick={decrement} className="btnDec">-</button>
        </div>
    )
}
export default CountAction