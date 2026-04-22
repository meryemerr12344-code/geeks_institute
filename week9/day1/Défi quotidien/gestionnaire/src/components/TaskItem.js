import { useContext, useRef, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const editRef = useRef();

  const saveEdit = () => {
    dispatch({
      type: "EDIT_TASK",
      payload: {
        id: task.id,
        text: editRef.current.value
      }
    });

    setIsEditing(false);
  };

  return (
    <div style={{ margin: "8px 0" }}>
      {isEditing ? (
        <>
          <input ref={editRef} defaultValue={task.text} />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <span
            onClick={() =>
              dispatch({ type: "TOGGLE_TASK", payload: task.id })
            }
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
              marginRight: "10px"
            }}
          >
            {task.text}
          </span>

          <button onClick={() => setIsEditing(true)}>Edit</button>

          <button
            onClick={() =>
              dispatch({ type: "DELETE_TASK", payload: task.id })
            }
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}