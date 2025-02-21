import React from "react";
import "./../styles/ResponseDisplay.css";

const ResponseDisplay = ({ response, selectedOption }) => {
  return (
    <div className="response-display">
      <h3>API Response</h3>
      {response && (
        <div>
          <p><strong>User ID:</strong> {response.user_id}</p>
          <p><strong>Email:</strong> {response.email}</p>
          <p><strong>Roll Number:</strong> {response.roll_number}</p>
          {selectedOption && (
            <p><strong>{selectedOption}:</strong> {JSON.stringify(response[selectedOption])}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ResponseDisplay;
