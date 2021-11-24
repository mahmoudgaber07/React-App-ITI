
const TodoList = ({ todos }) => {
    const todosLis =
        todos && todos.length > 0 ?
            todos.map((todo, i) => {
                return (
                    <ul key={i} className="list-unstyled">
                        <li className="border p-3">
                            <div className="text">
                                <p>Title: {todo.title}</p>
                                <p>Content: {todo.content}</p>
                            </div>
                        </li>
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
