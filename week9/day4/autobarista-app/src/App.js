import { useState } from "react";
import StatusDisplay from "./components/StatusDisplay";

function App() {
  // STATE = brain dyal app
  const [status, setStatus] = useState("Idle");

  return (
    <div className="container">
      <h1>☕ AutoBarista</h1>

      {/* Display component */}
      <StatusDisplay status={status} />

      {/* Controls */}
      <div className="buttons">
        <button onClick={() => setStatus("Idle")}>Idle</button>
        <button onClick={() => setStatus("Brewing")}>Brewing</button>
        <button onClick={() => setStatus("Delivering")}>
          Delivering
        </button>
      </div>
    </div>
  );
}

export default App;