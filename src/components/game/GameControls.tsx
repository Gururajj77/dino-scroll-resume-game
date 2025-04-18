
import React from 'react';

interface GameControlsProps {
  onReset: () => void;
  onJump: () => void;
  isGameOver: boolean;
}

const GameControls: React.FC<GameControlsProps> = ({ onReset, onJump, isGameOver }) => {
  return (
    <div className="fixed bottom-4 left-4 z-40 flex gap-2">
      {isGameOver && (
        <button
          className="p-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          onClick={onReset}
        >
          Restart
        </button>
      )}
      <button
        className="p-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        onClick={onJump}
      >
        Jump
      </button>
    </div>
  );
};

export default GameControls;
