import React, { useState } from "react";
import Todo from "./Todo";
import "./commonStyle.css";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value.toUpperCase());
  };

  const id = Math.trunc(Math.random() * 9999);
  const handleOnClick = () => {
    const todos = [...todoList, { todo, id }];
    setTodoList(todos);
    setTodo(" ");
  };

  const deleteTodo = (id) => {
    const updatedTodo = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(updatedTodo);
  };

  console.log(todoList);
  return (
    <div>
      <div className="input-btn-container">
        <input
          className="input-task"
          type="text"
          onChange={handleChange}
          value={todo}
          placeholder="Enter Task....."
        />
        <button className="add-btn" onClick={handleOnClick}>
          Add Task
        </button>
      </div>
      <div>
        {todoList.map((todo) => {
          return <Todo todo={todo} deleteTodo={deleteTodo} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
