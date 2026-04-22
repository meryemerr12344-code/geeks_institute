import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { state } = useContext(TaskContext);

  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === "completed") return task.completed;
    if (state.filter === "active") return !task.completed;
    return true;
  });

  return (
    <div style={{ marginTop: "15px" }}>
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}