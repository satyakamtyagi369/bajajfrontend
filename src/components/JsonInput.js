import React, { useState } from "react";

const JsonInput = ({ onSubmit }) => {
  const [jsonInput, setJsonInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const parsedData = JSON.parse(jsonInput);
      if (!parsedData.data || !Array.isArray(parsedData.data)) {
        alert("Invalid JSON format: Must contain a 'data' array.");
        return;
      }
      onSubmit(parsedData);
    } catch (error) {
      alert("Invalid JSON! Please enter valid JSON.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="4"
        placeholder='Enter JSON (e.g., { "data": ["A", "C", "z"] })'
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default JsonInput;
