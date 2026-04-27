import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <DashboardLayout>
          <Dashboard />
        </DashboardLayout>
      </div>
    </div>
  );
}

export default App;