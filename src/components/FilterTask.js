import React from "react";
import { useTaskContext, FILTER_TASK } from "../context/TaskConText";

function FilterTask() {
  const { state, dispatch } = useTaskContext();

  return (
    <div className="mb-4">
      <input
        className="w-72 p-2 border rounded"
        value={state.filter}
        onChange={(e) =>
          dispatch({ type: FILTER_TASK, payload: e.target.value })
        }
        type="text"
        placeholder="Filter tasks..."
      />
    </div>
  );
}

export default FilterTask;
