import VideoCard from "./VideoCard";
import videos from "../data/videos";

export default function VideoGrid() {
  return (
    <div style={styles.grid}>
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          title={video.title}
          channel={video.channel}
          image={video.image}
        />
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "flex",
    flexWrap: "wrap",
    padding: "10px",
  },
};