import { useState } from "react";
import DisplayCounter from "./DisplayCounter";
import BrewButton from "./BrewButton";

function SessionBrewCounter() {
  const [brewCount, setBrewCount] = useState(0);

  function handleBrewComplete() {
    setBrewCount(prev => prev + 1);
  }

  return (
    <div className="card">
      <h2>Session Brew Counter</h2>

      <DisplayCounter count={brewCount} />
      <BrewButton onBrew={handleBrewComplete} />
    </div>
  );
}

export default SessionBrewCounter;