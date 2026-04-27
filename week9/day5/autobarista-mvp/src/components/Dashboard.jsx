import Inventory from "./Inventory";
import MachineStatus from "./MachineStatus";
import SimulateOrderButton from "./SimulateOrderButton";

function Dashboard({ inventoryLevel, machineStatus, simulateOrder }) {
  return (
    <main style={{ padding: "20px" }}>
      <Inventory inventoryLevel={inventoryLevel} />
      <MachineStatus machineStatus={machineStatus} />

      <SimulateOrderButton
        inventoryLevel={inventoryLevel}
        simulateOrder={simulateOrder}
      />
    </main>
  );
}

export default Dashboard;