import HardwareStatusGrid from "../components/HardwareStatusGrid";
import OrderQueue from "../components/OrderQueue";

function Dashboard() {
  return (
    <div className="dashboard">
      <HardwareStatusGrid />
      <OrderQueue />
    </div>
  );
}

export default Dashboard;