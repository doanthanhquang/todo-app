import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import FilterTask from "./components/FilterTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (id) => {
    const updatedTask = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTask);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">TodoApp v1</h1>
      <AddTask addTask={addTask} />
      <FilterTask filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} completeTask={completeTask}/>
    </div>
  );
}

export default App;
