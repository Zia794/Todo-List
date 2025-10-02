import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState("All");
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (!text) return;
    if (editTask) {
      setTasks(
        tasks.map((t) =>
          t.id === editTask.id ? { ...t, text } : t
        )
      );
      setEditTask(null);
    } else {
      setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 flex flex-col items-center">
      <Navbar />
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg mt-6">
        <TodoForm addTask={addTask} editTask={editTask} />
        <Filter setFilter={setFilter} currentFilter={filter} />
        <TodoList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          setEditTask={setEditTask}
        />
      </div>
    </div>
  );
}

export default App;
