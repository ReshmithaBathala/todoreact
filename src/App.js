// src/App.js
import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Yoga for one hour", complete: true, editing: false },
    {
      id: 2,
      task: "Study for two hours in the morning",
      complete: true,
      editing: false,
    },
    { id: 3, task: "Clean room", complete: false, editing: false },
  ]);

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever the tasks state changes

  const onSave = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // Adding new task to taskList

  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      task,
      complete: false,
      editing: false,
    };
    setTasks([...tasks, newTask]);
  };

  //Deleting a task from taskList

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggling the edit and save button
  const toggleEdit = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, editing: !task.editing } : task
      )
    );
  };
  //Edit the task that is already stored
  const editTask = (id, newTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, task: newTask, editing: false } : task
      )
    );
  };

  // Mark the task as completed when completed
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    );
  };

  return (
    <div className="app">
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleEdit={toggleEdit}
        editTask={editTask}
        toggleComplete={toggleComplete}
      />
      <button className="save-button" onClick={onSave}>
        Save
      </button>
    </div>
  );
};

export default App;
