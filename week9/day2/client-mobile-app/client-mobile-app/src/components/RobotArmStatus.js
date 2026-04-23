import DataDisplay from "./DataDisplay";

function RobotArmStatus() {
  const temperature = 45;
  const task = "Moving to cup";

  return (
    <div>
      <h2>Robot Arm Status</h2>

      <DataDisplay label="Temperature" value={`${temperature}°C`} />
      <DataDisplay label="Task" value={task} />
    </div>
  );
}

export default RobotArmStatus;