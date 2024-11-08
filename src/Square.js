import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <button
      style={{
        width: "100px",
        height: "100px",
        fontSize: "2rem",
        cursor: "pointer",
        backgroundColor: "#f0f0f0",
        border: "1px solid #ccc",
      }}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
