import React from "react";

const Filter = ({ setFilter, currentFilter }) => {
  const filters = ["All", "Completed", "Pending"];

  return (
    <div className="flex justify-center gap-3 mb-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded-lg shadow transition ${
            currentFilter === f
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default Filter;
