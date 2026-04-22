import { TaskProvider } from "./context/TaskContext";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";

function App() {
  return (
    <TaskProvider>
      <div style={{ padding: "20px" }}>
        <h1>Task Manager</h1>
        <AddTask />
        <FilterButtons />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;