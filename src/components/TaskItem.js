import React from "react";

function TaskItem() {
  return (
    <div className="flex items-center justify-between p-2 border rounded">
      <div className="flex flex-col">
        <p className="font-bold text-lg">title</p>
        <p className="text-sm">description</p>
      </div>
    </div>
  );
}

export default TaskItem;
