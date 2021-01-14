import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  //Events
  //{} indicate that there is JS within it
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todos.id));
  };
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button>
        <i className="fas fa-check"></i>
      </button>
      <button>
        <i className="fas fa-trash"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
