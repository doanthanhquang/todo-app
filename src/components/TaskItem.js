import React from "react";
import { useTaskContext, COMPLETE_TASK } from "../context/TaskConText";

function TaskItem({ task }) {
  const { dispatch } = useTaskContext();
  return (
    <div
      onClick={() => dispatch({ type: COMPLETE_TASK, payload: task.id })}
      className={`flex items-center justify-between p-2 border rounded cursor-pointer ${
        task.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <div className="flex flex-col">
        <p className="font-bold text-lg">{task.title}</p>
        <p className="text-sm">{task.description}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm">
          {task.completed ? "Completed" : "Not Completed"}
        </p>
      </div>
    </div>
  );
}

export default TaskItem;
