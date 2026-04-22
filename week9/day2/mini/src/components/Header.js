import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header style={styles.header}>
      <h2>YouTube Clone</h2>
      <SearchBar />
      <button>Login</button>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    background: "#fff",
    borderBottom: "1px solid #ddd",
  },
};