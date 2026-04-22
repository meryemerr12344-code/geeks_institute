export default function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <p>🏠 Home</p>
      <p>🔥 Trending</p>
      <p>📺 Subscriptions</p>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    padding: "10px",
    borderRight: "1px solid #ddd",
    height: "100vh",
  },
};