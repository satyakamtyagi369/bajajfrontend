import React, { useState } from "react";
import "./../styles/InputForm.css";

const InputForm = ({ onSubmit }) => {
  const [jsonInput, setJsonInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const parsedData = JSON.parse(jsonInput);
      if (parsedData.data) {
        onSubmit(parsedData);
      } else {
        alert("Invalid JSON format! Ensure it contains 'data' key.");
      }
    } catch (error) {
      alert("Invalid JSON format!");
    }
  };

  return (
    <div className="input-form">
      <h2>Enter JSON Input</h2>
      <textarea
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder='Example: { "data": ["A","C","z","1"] }'
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default InputForm;
