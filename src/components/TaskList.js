import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  return (
    <div className="space-y-2 w-full max-w-md">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
