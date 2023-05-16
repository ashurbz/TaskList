import React from "react";
import "./commonStyle.css";

const Todo = ({ todo, deleteTodo }) => {
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        <li className="todo"> {todo.todo}</li>
      </ul>
      <span onClick={handleDelete} className="cross">
        ❌
      </span>
      <span className="write">✍🏻</span>
    </div>
  );
};

export default Todo;
