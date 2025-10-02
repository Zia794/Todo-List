import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, deleteTask, toggleComplete, setEditTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available.</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
              setEditTask={setEditTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
