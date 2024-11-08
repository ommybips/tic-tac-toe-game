import React from "react";
import Square from "./Square";

const Board = ({ board, onSquareClick }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 100px)",
        gap: "10px",
      }}
    >
      {board.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
