function StatusDisplay({ status }) {
  return (
    <div className="status-box">
      {status === "Idle" && <p>Ready for your order.</p>}

      {status === "Brewing" && (
        <p>Brewing your coffee... ⏳</p>
      )}

      {status === "Delivering" && (
        <p>Arm in motion, please wait 🚀</p>
      )}
    </div>
  );
}

export default StatusDisplay;