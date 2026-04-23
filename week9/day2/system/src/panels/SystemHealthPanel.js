import Card from "../components/Card";
import StatusRow from "../components/StatusRow";

function SystemHealthPanel() {
  return (
    <Card title="Hardware Health">
      
      <StatusRow 
        deviceName="Dobot Arm" 
        status="Online" 
        indicatorColor="green" 
      />

      <StatusRow 
        deviceName="Tuya Fingerbot" 
        status="Asleep" 
        indicatorColor="yellow" 
      />

      <StatusRow 
        deviceName="Coffee Machine" 
        status="Offline" 
        indicatorColor="red" 
      />

    </Card>
  );
}

export default SystemHealthPanel;