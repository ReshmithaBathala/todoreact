import React from "react";
import { FaEdit } from "react-icons/fa";
import { IoSave } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { IoCheckmarkCircle } from "react-icons/io5";
import "./index.css";

//Dynamic color adding list
const colors = [
  "#f8d7da",
  "#d1ecf1",
  "#d4edda",
  "#fff3cd",
  "#c3e6cb",
  "#f5c6cb",
  "#bee5eb",
  "#c3e6cb",
  "#ffdf7e",
  "#e2e3e5",
];

//Component TaskList for displaying new tasks and modifying existing ones
const TaskList = ({
  tasks,
  deleteTask,
  toggleEdit,
  editTask,
  toggleComplete,
}) => {
  return (
    <ul className="tasks-ul-container">
      {tasks.map((task, index) => (
        <li
          key={task.id}
          className="task-li-item"
          style={{ borderColor: colors[index % colors.length] }}
        >
          <div className="edit-task-container">
            {task.editing ? (
              <input
                type="text"
                defaultValue={task.task}
                onBlur={(e) => editTask(task.id, e.target.value)}
                className="edit-task"
              />
            ) : (
              <span
                style={{
                  textDecoration: task.complete ? "line-through" : "none",
                }}
                className="task"
              >
                {task.task}
              </span>
            )}
            <button onClick={() => toggleEdit(task.id)} className="edit-button">
              {task.editing ? (
                <IoSave className="edit-color" />
              ) : (
                <FaEdit className="edit-color" />
              )}
            </button>
          </div>
          <div className="delete-mark-container">
            <button onClick={() => deleteTask(task.id)} className="edit-button">
              <MdDeleteOutline className="edit-color" />
            </button>

            <button
              onClick={() => toggleComplete(task.id)}
              className="edit-button"
            >
              {task.complete ? (
                <IoCheckmarkCircle className="mark-completed" />
              ) : (
                <IoCheckmarkCircle className="mark-notyet" />
              )}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
