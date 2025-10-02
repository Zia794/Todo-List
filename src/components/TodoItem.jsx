import React from "react";

const TodoItem = ({ task, deleteTask, toggleComplete, setEditTask }) => {
  return (
    <li className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow">
      <span
        onClick={() => toggleComplete(task.id)}
        className={`flex-grow cursor-pointer ${
          task.completed ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {task.text}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => setEditTask(task)}
          className="px-2 py-1 text-sm bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
