import React from "react";
import AddTask from "./components/AddTask";
import FilterTask from "./components/FilterTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">TodoApp v2</h1>
      <AddTask />
      <FilterTask />
      <TaskList />
    </div>
  );
}

export default App;
