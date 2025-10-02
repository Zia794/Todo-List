import React, { useState, useEffect } from "react";

const TodoForm = ({ addTask, editTask }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (editTask) {
      setInput(editTask.text);
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={input}
        placeholder="Enter a task..."
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        {editTask ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
