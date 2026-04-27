export default function DrinkItem({ name, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        margin: 5,
        padding: 10,
        border: "1px solid black",
        background: isSelected ? "green" : "white",
        color: isSelected ? "white" : "black",
        cursor: "pointer",
      }}
    >
      {name}
    </button>
  );
}