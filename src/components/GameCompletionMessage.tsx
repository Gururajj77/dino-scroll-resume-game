
import React from 'react';

interface GameCompletionMessageProps {
  show: boolean;
}

const GameCompletionMessage: React.FC<GameCompletionMessageProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 pointer-events-none">
      <div className="bg-white p-6 max-w-sm text-center rounded shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Portfolio Complete!</h2>
        <p className="mb-2">You've successfully navigated through all sections.</p>
        <p className="text-lg font-semibold">Thanks for visiting!</p>
      </div>
    </div>
  );
};

export default GameCompletionMessage;
