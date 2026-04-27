function SimulateOrderButton({ inventoryLevel, simulateOrder }) {
  if (inventoryLevel === 0) {
    return (
      <div style={{ color: "red", fontWeight: "bold", marginTop: "20px" }}>
        Out of Cups! Please Restock.
      </div>
    );
  }

  return (
    <button
      onClick={simulateOrder}
      style={{
        marginTop: "20px",
        padding: "10px 20px",
        cursor: "pointer",
      }}
    >
      Simulate Order
    </button>
  );
}

export default SimulateOrderButton;