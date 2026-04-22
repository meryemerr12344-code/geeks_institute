import React from "react";

type QuoteCardProps = {
  quote: string;
  author: string;
  color: string;
  onClick: () => void;
};

function QuoteCard({ quote, author, color, onClick }: QuoteCardProps) {
  return (
    <div
  style={{ backgroundColor: "#ffffff" }}
  className="w-20 border border-white ronded-3xl"
> 
      <h1
        style={{ color }}
        className="text-4xl font-semibold leading-[1.05] text-left sm:text-5xl text-center"
      >
        "{quote}"
      </h1>

      <p
        style={{ color }}
        className="mt-8 text-base italic font-semibold tracking-tight text-right"
      >
        - {author || "Unknown"} -
      </p>

      <div className="flex justify-end mt-10">
        <button
          style={{ backgroundColor: color }}
          onClick={onClick}
          className=" text-xs font-semibold uppercase tracking-[0.28em] text-white  border border-black/10 shadow-[0_12px_24px_rgba(0,0,0,0.22)] transition duration-200 hover:opacity-95"
        >
          NEW QUOTE
        </button>
      </div>
    </div>
  );
}

export default QuoteCard;