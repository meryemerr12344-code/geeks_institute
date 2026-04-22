import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export default function AddTask() {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TaskContext);

  const handleAdd = () => {
    if (!text.trim()) return;

    dispatch({ type: "ADD_TASK", payload: text });
    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}