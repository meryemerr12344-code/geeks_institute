export default function BrewButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        marginTop: 20,
        padding: "15px 30px",
        fontSize: 18,
        background: "black",
        color: "white",
        cursor: "pointer",
      }}
    >
      Brew My Coffee
    </button>
  );
}