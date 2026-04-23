
function StatusRow({ deviceName, status, indicatorColor }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      margin: "10px 0"
    }}>
      
      <span style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: indicatorColor,
        display: "inline-block",
        marginRight: "10px"
      }}></span>

      <span style={{ flex: 1 }}>{deviceName}</span>

      <span>{status}</span>
    </div>
  );
}

export default StatusRow;