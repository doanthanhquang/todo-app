import React from "react";

function AddTask() {
  return (
    <div className="mb-4 flex items-center gap-2">
      <div className="flex flex-col gap-2">
          <input
            className="w-72 p-2 border rounded"
            type="text"
            placeholder="Add new task..."
          />
          <input
            className="w-72 p-2 border rounded"
            type="text"
            placeholder="Add Description..."
          />
      </div>
      <button className="p-2 border rounded bg-blue-500 text-white">Add Task</button>
    </div>
  );
}

export default AddTask;
