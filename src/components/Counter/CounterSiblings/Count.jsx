import { useSelector } from "react-redux"
const Count = () => {

     //(useSelector) access state from redux store
    const countState = useSelector(state => state.countRed.count)
    
    return (
        <div className="count-view container">
            <p className="h3 border border-3 p-5 my-5">{countState}</p>
        </div>
    )
}
export default Count