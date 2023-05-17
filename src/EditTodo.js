import React, { useState } from "react";

const EditTodo = ({ todo, handleTaskEdit, id, clickChange }) => {
  const [taskText, setTextTask] = useState(todo);

  const handleTaskChange = (e) => {
    setTextTask(e.target.value);
  };

  const handleClickChange = () => {
    handleTaskEdit(id, taskText);
    clickChange();
  };

  return (
    <div>
      <input
        onChange={handleTaskChange}
        type="text"
        placeholder="Enter Task"
        value={taskText}
      />
      <button onClick={handleClickChange}>Change Task</button>
    </div>
  );
};

export default EditTodo;
