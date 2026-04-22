import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleAdd = () => {
    setResult(Number(num1) + Number(num2));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-violet-700 gap-6">
      <h2 className="text-white text-2xl font-bold">
        Add Two Numbers
      </h2>
      <h1 className="text-5xl text-red-500">TEST</h1>
      <div className="flex items-center gap-10 bg-violet-900/80 p-6 rounded-3xl shadow-xl shadow-violet-950/40 backdrop-blur-md">

        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="w-24 px-4 py-3 rounded-2xl bg-violet-200/80 text-violet-950 placeholder-violet-800 text-center outline-none"
          placeholder="Num 1"
        />

        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="w-24 px-4 py-3 rounded-2xl bg-violet-200/80 text-violet-950 placeholder-violet-800 text-center outline-none"
          placeholder="Num 2"
        />

        <button
          onClick={handleAdd}
          className="bg-violet-500 text-white font-bold px-5 py-3 rounded-2xl hover:bg-violet-400 transition"
        >
          Add
        </button>
      </div>

      {/* result */}
      {result !== null && (
        <div className="text-white text-xl font-bold">
          Result: {result}
        </div>
      )}

    </div>
  );
}

export default App;