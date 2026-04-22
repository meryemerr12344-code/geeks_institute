import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);

  return (
    <div style={{ margin: "10px 0" }}>
      <span
        onClick={() =>
          dispatch({ type: "TOGGLE_TASK", payload: task.id })
        }
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
      >
        {task.text}
      </span>

      <button
        onClick={() =>
          dispatch({ type: "REMOVE_TASK", payload: task.id })
        }
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;