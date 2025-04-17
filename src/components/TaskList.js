import React from "react";
import TaskItem from "./TaskItem";
import { useTaskContext } from "../context/TaskConText";

function TaskList() {
  const { state } = useTaskContext();

  return (
    <div className="space-y-2 w-full max-w-md">
      {state.tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
