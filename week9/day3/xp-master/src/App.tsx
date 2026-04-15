import BaseButton from "./components/BaseButton";

function App() {
  const brewCoffee = () => {
    console.log("Brewing coffee...");
  };
  const stopMachine = () => {
    console.log("Stopping machine...");
  };
  return (
    <>
    <BaseButton text="Brew Coffee" color="green" action={brewCoffee} />
    <BaseButton text="Stop Machine" color="red" action={stopMachine} /> 
    </>
  );
}

export default App;