import { useState } from "react";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  // function to increase votes
  const handleVote = (index) => {
    const updatedLanguages = languages.map((lang, i) => {
      if (i === index) {
        return { ...lang, votes: lang.votes + 1 };
      }
      return lang;
    });

    setLanguages(updatedLanguages);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Voting App</h1>

      {languages.map((lang, index) => (
        <div key={index} style={{ margin: "20px" }}>
          <h2>
            {lang.name} : {lang.votes}
          </h2>

          <button onClick={() => handleVote(index)}>
            Vote for {lang.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;