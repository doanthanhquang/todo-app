import React from "react";
import { useTaskContext, ADD_TASK } from "../context/TaskConText";

function AddTask() {
  const { dispatch } = useTaskContext();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleAddTask = () => {
    if (!title || !description) return;
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    dispatch({ type: ADD_TASK, payload: newTask });
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
