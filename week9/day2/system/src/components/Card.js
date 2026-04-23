function Card({ title, children }) {
  return (
    <div style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      width: "300px",
      margin: "20px auto"
    }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Card;