import { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  const [inventoryLevel, setInventoryLevel] = useState(10);
  const [machineStatus, setMachineStatus] = useState("Idle");

  const simulateOrder = async () => {
    if (inventoryLevel <= 0) return;

    // 1 cup consumed
    setInventoryLevel((prev) => prev - 1);

    // Brewing phase (Tuya Fingerbot simulation)
    setMachineStatus("Brewing");

    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Delivering phase (Robotic arm simulation)
    setMachineStatus("Delivering");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Back to idle
    setMachineStatus("Idle");
  };

  return (
    <div>
      <Header />

      <Dashboard
        inventoryLevel={inventoryLevel}
        machineStatus={machineStatus}
        simulateOrder={simulateOrder}
      />
    </div>
  );
}

export default App;