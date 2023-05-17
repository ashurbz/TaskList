import React, { useState } from "react";
import Todo from "./Todo";
import "./commonStyle.css";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value.toUpperCase());
  };

  const handleOnClick = () => {
    const todos = [...todoList, todo];
    setTodoList(todos);
    setTodo(" ");
  };

  const handleTaskEdit = (id, newTodo) => {
    const updatedTodo = todoList.map((todo, index) => {
      if (id === index) {
        return newTodo;
      }
      return todo;
    });
    setTodoList(updatedTodo);
    console.log(todoList);
  };

  const deleteTodo = (id) => {
    const updatedTodo = todoList.filter((todo, index) => {
      return index !== id;
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
        {todoList.map((todo, index) => {
          return (
            <Todo
              handleTaskEdit={handleTaskEdit}
              todo={todo}
              deleteTodo={deleteTodo}
              id={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
