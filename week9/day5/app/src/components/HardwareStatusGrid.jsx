import StatusRow from "./StatusRow";

function HardwareStatusGrid() {
  return (
    <div className="grid">
      <StatusRow deviceName="Arm Motor" status="OK" indicatorColor="green" />
      <StatusRow deviceName="Temperature" status="45°C" indicatorColor="yellow" />
      <StatusRow deviceName="Pump" status="OK" indicatorColor="green" />
    </div>
  );
}

export default HardwareStatusGrid;