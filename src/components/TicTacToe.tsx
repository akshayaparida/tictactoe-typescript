// src/components/TicTacToe.tsx
import { useState } from "react";
import Block from "./Block";

const TicTacToe = () => {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board) || isDraw(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares: Array<string | null>) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6],            // diagonals
    ];
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const isDraw = (squares: Array<string | null>) => {
    return squares.every(square => square !== null);
  };

  const winner = calculateWinner(board);
  const draw = isDraw(board) && !winner;
  const status = winner 
    ? `Winner: ${winner}`
    : draw 
    ? "It's a Draw!" 
    : `Next player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="flex flex-col items-center">
      <div className="text-lg font-bold border-white mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-2">
        {board.map((value, index) => (
          <Block
            key={index} 
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <button
        className="mt-4 p-2 bg-blue-950 text-white rounded"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
