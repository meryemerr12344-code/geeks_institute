function OrderQueue() {
  const orders = [
    "Espresso - In Progress",
    "Latte - Waiting",
    "Americano - Done",
  ];

  return (
    <div className="order-queue">
      <h2>Order Queue</h2>
      <ul>
        {orders.map((order, i) => (
          <li key={i}>{order}</li>
        ))}
      </ul>
    </div>
  );
}

export default OrderQueue;