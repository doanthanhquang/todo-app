import React, { useState } from "react";

function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    addTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="mb-4 flex items-center gap-2">
      <div className="flex flex-col gap-2">
        <input
          className="w-72 p-2 border rounded"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add new task..."
        />
        <input
          className="w-72 p-2 border rounded"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add Description..."
        />
      </div>
      <button
        className="p-2 border rounded bg-blue-500 text-white"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
