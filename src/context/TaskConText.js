import React, { createContext, useReducer, useEffect, useContext } from "react";

const TaskContext = createContext();

export const ADD_TASK = "ADD_TASK";
export const LOAD_TASKS = "LOAD_TASKS";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const FILTER_TASK = "FILTER_TASK";

const taskReducer = (state, action) => {
  switch (action.type) {
    case LOAD_TASKS:
      return { ...state, tasks: action.payload };
    case ADD_TASK:
      const newTask = [action.payload, ...state.tasks];
      localStorage.setItem("tasks", JSON.stringify(newTask));
      return { ...state, tasks: newTask };
    case COMPLETE_TASK:
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return { ...state, tasks: updatedTasks };
    case FILTER_TASK:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

const initialState = {
  tasks: [],
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    dispatch({ type: LOAD_TASKS, payload: storedTasks });
  }, []);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
