import React from "react";

function FilterTask() {
  return (
    <div className="mb-4">
      <input
        className="w-72 p-2 border rounded"
        type="text"
        placeholder="Filter tasks..."
      />
    </div>
  );
}

export default FilterTask;
