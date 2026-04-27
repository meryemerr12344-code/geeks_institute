export default function RobotStatusIndicator({ status }) {
  return (
    <p>
      Robot Status:{" "}
      <strong style={{ color: status === "Busy" ? "red" : "green" }}>
        {status}
      </strong>
    </p>
  );
}