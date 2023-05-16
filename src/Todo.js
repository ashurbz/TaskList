import React from "react";
import "./commonStyle.css";

const Todo = ({ todo, deleteTodo, id }) => {
  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        <li className="todo"> {todo}</li>
      </ul>
      <span onClick={handleDelete} className="cross">
        ❌
      </span>
      <span className="write">✍🏻</span>
    </div>
  );
};

export default Todo;
