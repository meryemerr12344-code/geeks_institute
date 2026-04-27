import { useState } from "react";
import UserWelcome from "../components/UserWelcome";
import DrinkList from "../components/DrinkList";
import RobotStatusIndicator from "../components/RobotStatusIndicator";
import BrewButton from "../components/BrewButton";

export default function CoffeeOrderScreen() {
  const [robotStatus, setRobotStatus] = useState("Ready");
  const [selectedDrink, setSelectedDrink] = useState(null);

  const drinks = ["Espresso", "Americano", "Latte"];

  const handleBrew = () => {
    if (!selectedDrink) {
      alert("Choisis un café d'abord ☕");
      return;
    }

    setRobotStatus("Busy");

    setTimeout(() => {
      alert(`☕ ${selectedDrink} is ready!`);
      setRobotStatus("Ready");
    }, 2000);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <UserWelcome userName="Meryem" />

      <RobotStatusIndicator status={robotStatus} />

      <h3>Choose your drink:</h3>

      <DrinkList
        drinks={drinks}
        selectedDrink={selectedDrink}
        onSelect={setSelectedDrink}
      />

      <BrewButton onClick={handleBrew} />
    </div>
  );
}