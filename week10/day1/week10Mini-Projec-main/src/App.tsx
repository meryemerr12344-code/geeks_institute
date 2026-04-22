import { useState } from "react";

import QuoteCard from "./components/QuoteCard";
import quotes from "./data/quotes";

function getRandomIndex(max: number) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function App() {
  const [quote, setQuote] = useState(
    quotes[getRandomIndex(quotes.length)]
  );
  const [color, setColor] = useState(getRandomColor());

  const handleNewQuote = () => {
    let newQuote;

    do {
      newQuote = quotes[getRandomIndex(quotes.length)];
    } while (newQuote.quote === quote.quote);

    setQuote(newQuote);
    setColor(getRandomColor());
  };

  return (
  <div
    style={{ backgroundColor: color }}
    className="flex items-center justify-center min-h-screen transition-all duration-500"
  >
    <QuoteCard
      quote={quote.quote}
      author={quote.author}
      color={color} 
      onClick={handleNewQuote}
    />
  </div>
);
}