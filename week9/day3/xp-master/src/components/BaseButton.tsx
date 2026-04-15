type BaseButtonProps = {
  text: string;
  color: string;
  action: () => void;
};

function BaseButton({ text, color, action }: BaseButtonProps) {
  return (
    <button
      onClick={action}
      style={{
        backgroundColor: color,
        color: "white",
        padding: "10px 16px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}

export default BaseButton;