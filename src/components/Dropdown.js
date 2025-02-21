import React from "react";
import "./../styles/Dropdown.css";

const Dropdown = ({ options, onSelect }) => {
  return (
    <div className="dropdown">
      <h3>Select Data Type:</h3>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select</option>
        <option value="alphabets">Alphabets</option>
        <option value="numbers">Numbers</option>
        <option value="highest_alphabet">Highest Alphabet</option>
      </select>
    </div>
  );
};

export default Dropdown;
