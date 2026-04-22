import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

function TaskList() {
  const { state } = useContext(TaskContext);

return (
  <div>
    {state.tasks.map((task) => (
      <div key={task.id}>{task.text}</div>
    ))}
  </div>
);
 
}

export default TaskList;