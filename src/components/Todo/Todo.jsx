import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux"
import { addTodoAction } from "../../Redux/todoRedux"

const Todo = () => {
  //state from redux
  const todosState = useSelector(state => state.todosRed.todos)

  //dispatch from redux to access addTodoAction
  const dispatch = useDispatch();
  const addTodo = (task) => {
      dispatch(addTodoAction(task))
  }
  return (
    <div className="container">
      <div className="todo">
      <TodoForm addTodo={addTodo}/>
        <TodoList todos={todosState}/>
      </div>
    </div>
  );
};

export default Todo;
