
import React, { useState, useEffect } from 'react';

interface InstructionOverlayProps {
  onClose: () => void;
}

const InstructionOverlay: React.FC<InstructionOverlayProps> = ({ onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 5000); // Auto hide after 5 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white p-8 max-w-md rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Welcome to my Interactive Resume!</h2>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Scroll <span className="font-bold">horizontally</span> to navigate through sections</li>
          <li>Use <span className="font-bold">Spacebar</span> or <span className="font-bold">Click</span> to make the dinosaur jump over obstacles</li>
          <li>Avoid hitting obstacles to progress through the portfolio</li>
          <li>Complete all sections to finish the game</li>
        </ul>
        <button 
          onClick={handleClose}
          className="w-full py-2 bg-black text-white hover:bg-gray-800 transition-colors"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default InstructionOverlay;
