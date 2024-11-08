import React, { useState, useEffect, useCallback } from "react";
import Board from "./Board";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isUserTurn, setIsUserTurn] = useState(true);
  const [userScore, setUserScore] = useState(0);
  const [pcScore, setPcScore] = useState(0);
  const [userStreak, setUserStreak] = useState(0);
  const [pcStreak, setPcStreak] = useState(0);
  const [winner, setWinner] = useState(null);

  const pcMove = (currentBoard) => {
    if (winner) return;
    const emptySquares = currentBoard
      .map((square, index) => (square === null ? index : null))
      .filter((index) => index !== null);
    const randomMove =
      emptySquares[Math.floor(Math.random() * emptySquares.length)];
    const newBoard = [...currentBoard];
    newBoard[randomMove] = "O";
    setBoard(newBoard);
    setIsUserTurn(true);
    checkWinner(newBoard);
  };

  const handleSquareClick = (index) => {
    if (board[index] || winner || !isUserTurn) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsUserTurn(false);
    checkWinner(newBoard);

    // pcMove(newBoard);
  };

  const checkWinner = (currentBoard) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        setWinner(currentBoard[a]);
        return;
      }
    }
    if (!currentBoard.includes(null)) {
      setWinner("Tie");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsUserTurn(true);
    setWinner(null);
  };

  useEffect(() => {
    if (winner) {
      if (winner === "X") {
        setUserScore((prev) => prev + 1);
        setUserStreak((prev) => prev + 1);
        setPcStreak(0);
        if (userStreak + 1 === 3) {
          setUserScore((prev) => prev + 1);
          setUserStreak(0);
        }
      } else if (winner === "O") {
        setPcScore((prev) => prev + 1);
        setPcStreak((prev) => prev + 1);
        setUserStreak(0);
        if (pcStreak + 1 === 3) {
          setPcScore((prev) => prev + 1);
          setPcStreak(0);
        }
      }
    }
  }, [winner]);

  useEffect(() => {
    if (!isUserTurn) {
      setTimeout(() => {
        pcMove(board);
      }, 500);
    }
  }, [isUserTurn]);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div>
        <p>
          User Score: {userScore} | PC Score: {pcScore}
        </p>
        <p>
          User Streak: {userStreak} | PC Streak: {pcStreak}
        </p>
      </div>
      <Board board={board} onSquareClick={handleSquareClick} />{" "}
      {winner && (
        <div>
          <p>
            {winner === "Tie"
              ? "It's a tie!"
              : `${winner === "X" ? "User" : "PC"} wins!`}
          </p>
          <button onClick={resetGame}>Restart Game</button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
