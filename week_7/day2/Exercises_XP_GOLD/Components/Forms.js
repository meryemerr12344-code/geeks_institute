import React, { useState } from "react";

function Forms() {
  // Part I + IV states
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  // Part V error state
  const [errormessage, setErrormessage] = useState("");

  // Part VI textarea state
  const [bio, setBio] = useState("This is some default text...");

  // Part VII select state
  const [car, setCar] = useState("Volvo");

  // Handle input changes (multiple inputs)
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      setUsername(value);
    }

    if (name === "age") {
      setAge(value);

      // validation (Part V)
      if (value && isNaN(value)) {
        setErrormessage("Age must be a number!");
      } else {
        setErrormessage("");
      }
    }
  };

  // Part III submit handler
  const mySubmitHandler = (e) => {
    e.preventDefault();
    alert(`Username: ${username}`);
  };

  // Part II conditional rendering
  let header = null;
  if (username || age) {
    header = (
      <h1>
        Hello {username} {age && `, Age: ${age}`}
      </h1>
    );
  }

  return (
    <div>
      {/* Conditional Header */}
      {header}

      <form onSubmit={mySubmitHandler}>
        {/* Username */}
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />

        <br />

        {/* Age */}
        <label>Age:</label>
        <input
          type="text"
          name="age"
          value={age}
          onChange={handleChange}
        />

        <br />

        {/* Error message */}
        {errormessage && <p style={{ color: "red" }}>{errormessage}</p>}

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>

      {/* Part VI Textarea */}
      <h3>Textarea:</h3>
      <textarea value={bio} onChange={(e) => setBio(e.target.value)} />

      {/* Part VII Select */}
      <h3>Select a car:</h3>
      <select value={car} onChange={(e) => setCar(e.target.value)}>
        <option value="Volvo">Volvo</option>
        <option value="BMW">BMW</option>
        <option value="Audi">Audi</option>
      </select>

      {/* Display final values */}
      <h2>Result:</h2>
      <p>Name: {username}</p>
      <p>Age: {age}</p>
      <p>Car: {car}</p>
      <p>Bio: {bio}</p>
    </div>
  );
}

export default Forms;