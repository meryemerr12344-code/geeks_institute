function StatusRow({ deviceName, status, indicatorColor }) {
  return (
    <div className="status-row">
      <span
        className="indicator"
        style={{ backgroundColor: indicatorColor }}
      ></span>
      <span>{deviceName}</span>
      <span>{status}</span>
    </div>
  );
}

export default StatusRow;