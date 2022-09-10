
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const TodoList = ({ todos,delTodo }) => {
    const todosLis =
        todos && todos.length > 0 ?
            todos.map((todo, i) => {
                return (
                    <ul key={i} className="list-unstyled">
                            <div className="d-flex justify-content-center">
                                <li className="border p-3">
                                        <p>Title: {todo.title}</p>
                                        <p>Content: {todo.content}</p>
                                </li>
                            <button className="btn btn-danger" onClick={() => {delTodo(todo.id)} }><FontAwesomeIcon icon={faTrash}/></button> 
                            </div>
                    </ul>
                );
            })
            :
            (
                <p className="mx-5"> No items in the list.</p>
            )
        return (
            <div>
                <div className="text-start">
                    <h5 className="mx-5 text-start">
                        Todo List
                    </h5>
                    {todosLis}
                </div>
            </div>
        )
}

export default TodoList;
