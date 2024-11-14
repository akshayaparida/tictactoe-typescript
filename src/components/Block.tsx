// src/components/Block.tsx
import React from "react";

interface BlockProps {
  value: string | null;
  onClick: () => void;
}

const Block: React.FC<BlockProps> = ({ value, onClick }) => {
  return (
    <button
      className="w-20 h-20 bg-gray-200 text-3xl font-bold flex justify-center items-center"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Block;
