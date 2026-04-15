import { useState } from "react";
import Sample_form from "./Components/Sample_form";
import Information from "./Components/Information";

function App() {
  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  destination: "",
  nutsFree: false,
  lactoseFree: false,
  vegan: false
});

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const params = new URLSearchParams({
      ...formData,
      lactoseFree: formData.lactoseFree ? "on" : "off"
    });
    window.location.search = params.toString();
  }

  return (
    <div >
      <h1 className="p-4 text-3xl font-bold text-white bg-gray-800">Sample form</h1>
      <Sample_form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <hr className="my-2 border-gray-400"/>
      <Information />

    </div>
  );
}

export default App;