// src/components/TaskInput.js
import React, { useState } from "react";
import "./index.css";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <div className="todo-form-container">
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add new task..."
          className="input-val"
          value={task}
          onChange={handleChange}
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default TaskInput;
