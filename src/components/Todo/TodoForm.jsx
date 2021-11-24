import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handelSubmission = (e) => {
    e.preventDefault();
    addTodo({ title, content });
    setTitle("");
    setContent("");
  };
  return (
    <div className="todo-form container">
      <h1>Todo List</h1>
      <form onSubmit={handelSubmission}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control w-25 m-auto"
            placeholder="Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
          <div className="mt-2">
            <textarea
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            name=""
            id=""
            cols="35"
            rows="5"
            placeholder="Content"
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-dark">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
