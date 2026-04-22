import SubscribeButton from "./SubscribeButton";

export default function VideoCard({ title, channel, image }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.img} />
      <h4>{title}</h4>
      <p>{channel}</p>
      <SubscribeButton />
    </div>
  );
}

const styles = {
  card: {
    width: "300px",
    margin: "10px",
    padding: "10px",
    border: "1px solid #ddd",
  },
  img: {
    width: "100%",
  },
};