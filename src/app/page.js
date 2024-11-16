"use client";
import { useState } from "react";

function Square({ value, onCLick }) {
  return (
    <button className="square" onClick={onCLick}>
      {value}
    </button>
  );
}

function Board({ squares, xIsNext, onPlay }) {
  function onSquareClick(idx) {
    if (squares[idx] || calculateWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[idx] = xIsNext ? "X" : "O";
    onPlay(newSquares);
  }

  const winner = calculateWinner(squares);

  return (
    <>
      {winner ? (
        <p>Winner is: {winner}</p>
      ) : (
        <p>Next Player: {xIsNext ? "X" : "O"}</p>
      )}
      <div className="board-row">
        <Square value={squares[0]} onCLick={() => onSquareClick(0)} />
        <Square value={squares[1]} onCLick={() => onSquareClick(1)} />
        <Square value={squares[2]} onCLick={() => onSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onCLick={() => onSquareClick(3)} />
        <Square value={squares[4]} onCLick={() => onSquareClick(4)} />
        <Square value={squares[5]} onCLick={() => onSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onCLick={() => onSquareClick(6)} />
        <Square value={squares[7]} onCLick={() => onSquareClick(7)} />
        <Square value={squares[8]} onCLick={() => onSquareClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 3, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move # " + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move + Math.random()}>
        <button oncl></button>
      </li>
    );
  });

  return (
    <div className="game">
      <h1>Testing auto deployment</h1>
      <div className="game-board">
        <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
      </div>
      <div className="game-info"></div>
    </div>
  );
}
