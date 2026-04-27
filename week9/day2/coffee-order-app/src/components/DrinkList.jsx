import DrinkItem from "./DrinkItem";

export default function DrinkList({ drinks, selectedDrink, onSelect }) {
  return (
    <div>
      {drinks.map((drink) => (
        <DrinkItem
          key={drink}
          name={drink}
          isSelected={selectedDrink === drink}
          onClick={() => onSelect(drink)}
        />
      ))}
    </div>
  );
}