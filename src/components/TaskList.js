import React from "react";
import TaskItem from "./TaskItem";
import { useTaskContext } from "../context/TaskConText";

function TaskList() {
  const { state } = useTaskContext();
  const filteredTasks = state.tasks.filter((task) =>
    (task.title || "").toLowerCase().includes((state.filter || "").toLowerCase())
  );
  if (filteredTasks.length === 0)
    return <p className="text-gray-500">Chưa có task nào!</p>;

  return (
    <div className="space-y-2 w-full max-w-md">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
