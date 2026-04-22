import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import VideoGrid from "./components/VideoGrid";

export default function App() {
  return (
    <div>
      <Header />

      <div style={styles.main}>
        <Sidebar />
        <VideoGrid />
      </div>
    </div>
  );
}

const styles = {
  main: {
    display: "flex",
  },
};