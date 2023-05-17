import React, { useState } from "react";
import "./commonStyle.css";
import EditTodo from "./EditTodo";

const Todo = ({ todo, deleteTodo, id, handleTaskEdit }) => {
  const [showEditTask, setShowEditTask] = useState(false);

  console.log(id);

  const handleDelete = () => {
    deleteTodo(id);
  };

  const clickChange = () => {
    setShowEditTask(false);
  };

  const handleTaskEditShow = () => {
    setShowEditTask(!showEditTask);
  };
  return (
    <div className="todo-container">
      <ul className="todo-list">
        <li className="todo">
          {" "}
          {showEditTask ? (
            <EditTodo
              clickChange={clickChange}
              handleTaskEdit={handleTaskEdit}
              todo={todo}
              id={id}
            />
          ) : (
            todo
          )}
        </li>
      </ul>
      <span onClick={handleDelete} className="cross">
        ❌
      </span>
      <span onClick={handleTaskEditShow} className="write">
        ✍🏻
      </span>
    </div>
  );
};

export default Todo;
