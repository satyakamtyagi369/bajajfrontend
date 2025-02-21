import React, { useState } from "react";
import InputForm from "./components/InputForm";
import Dropdown from "./components/Dropdown";
import ResponseDisplay from "./components/ResponseDisplay";
import "./styles/App.css";

const App = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  const handleJsonSubmit = async (jsonData) => {
    try {
      const response = await fetch("https://bajajendpoint29112003.onrender.com/bfhl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonData),
      });
      const result = await response.json();
      setApiResponse(result);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  return (
    <div className="app">
      <h1>22BET10013</h1>
      <InputForm onSubmit={handleJsonSubmit} />
      {apiResponse && <Dropdown onSelect={setSelectedOption} />}
      {apiResponse && <ResponseDisplay response={apiResponse} selectedOption={selectedOption} />}
    </div>
  );
};

export default App;
