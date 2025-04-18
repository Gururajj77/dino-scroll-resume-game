
import React, { useState, useEffect } from 'react';

interface DinoCharacterProps {
  position: number;
  isJumping: boolean;
  onJump: () => void;
}

const DinoCharacter: React.FC<DinoCharacterProps> = ({ position, isJumping, onJump }) => {
  // Listen for space bar and up arrow key presses
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.code === 'Space' || e.code === 'ArrowUp') && !isJumping) {
        onJump();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isJumping, onJump]);

  // Add simple leg movement animation when running
  const legClass = !isJumping ? "animate-pulse" : "";

  return (
    <div
      className={`absolute bottom-0 h-16 w-16 transition-transform cursor-pointer
        ${isJumping ? 'animate-dino-jump' : ''}`}
      style={{ left: `${position}%` }}
      onClick={() => !isJumping && onJump()}
    >
      <div className="relative w-full h-full">
        {/* Main dino body */}
        <div className="absolute bottom-0 w-12 h-12 bg-black rounded-t-md"></div>
        <div className="absolute bottom-0 left-6 w-8 h-8 bg-black"></div>
        
        {/* Legs with animation */}
        <div className={`absolute bottom-0 w-2 h-4 bg-black left-2 ${legClass} origin-top`}></div>
        <div className={`absolute bottom-0 w-2 h-4 bg-black left-8 ${!isJumping ? "animate-[leg-move_0.2s_alternate-reverse_infinite]" : ""} origin-top`}></div>
        
        {/* Eye */}
        <div className="absolute left-9 top-3 w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default DinoCharacter;
