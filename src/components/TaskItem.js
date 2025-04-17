import React from "react";

function TaskItem({ task, completeTask }) {
  return (
    <div
      className={`flex items-center justify-between p-2 border rounded cursor-pointer ${
        task.completed ? "bg-green-200" : "bg-white"
      }`}
      onClick={() => completeTask(task.id)}
    >
      <div className="flex flex-col">
        <p className="font-bold text-lg">{task.title}</p>
        <p className="text-sm">{task.description}</p>
      </div>
      <p className="text-sm">{task.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}

export default TaskItem;
