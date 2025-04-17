import React from "react";

function FilterTask({ filter, setFilter }) {
  return (
    <div className="mb-4">
      <input
        className="w-72 p-2 border rounded"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter tasks..."
      />
    </div>
  );
}

export default FilterTask;
