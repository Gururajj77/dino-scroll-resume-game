
import React, { useState, useEffect, useCallback } from 'react';
import DinoCharacter from './DinoCharacter';
import Obstacle from './Obstacle';

interface GameWorldProps {
  scrollProgress: number;
  currentSection: number;
  totalSections: number;
  onCollision: () => void;
  isJumping: boolean;
  onJump: () => void;
  onSectionChange: (section: number) => void;
}

const GameWorld: React.FC<GameWorldProps> = ({ 
  scrollProgress, 
  currentSection,
  totalSections,
  onCollision,
  isJumping,
  onJump,
  onSectionChange
}) => {
  const [score, setScore] = useState(0);
  const [dinoPosition, setDinoPosition] = useState(0);
  const [isMovingRight, setIsMovingRight] = useState(false);
  const [isMovingLeft, setIsMovingLeft] = useState(false);
  const moveSpeed = 0.5;
  
  // Generate obstacles at section boundaries
  const obstacles = Array.from({ length: totalSections - 1 }, (_, i) => ({
    id: i + 1,
    position: ((i + 1) / totalSections) * 100,
    size: { width: 20, height: 30 + (i * 5) }
  }));

  // Sync dino position with scroll progress
  useEffect(() => {
    const section = Math.floor((dinoPosition / 100) * totalSections);
    if (section !== currentSection) {
      onSectionChange(section);
    }
  }, [dinoPosition, currentSection, totalSections, onSectionChange]);

  // Handle keyboard movement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setIsMovingRight(true);
      } else if (e.key === 'ArrowLeft') {
        setIsMovingLeft(true);
      }
      
      if ((e.key === 'ArrowUp' || e.key === ' ') && !isJumping) {
        onJump();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setIsMovingRight(false);
      } else if (e.key === 'ArrowLeft') {
        setIsMovingLeft(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isJumping, onJump]);

  // Continuous movement
  useEffect(() => {
    if (!isMovingRight && !isMovingLeft) return;
    
    const moveInterval = setInterval(() => {
      setDinoPosition(prev => {
        if (isMovingRight) {
          return Math.min(prev + moveSpeed, 100);
        }
        if (isMovingLeft) {
          return Math.max(prev - moveSpeed, 0);
        }
        return prev;
      });
    }, 16);
    
    return () => clearInterval(moveInterval);
  }, [isMovingRight, isMovingLeft, moveSpeed]);

  // Collision detection with reduced collision area
  useEffect(() => {
    obstacles.forEach(obstacle => {
      const isNearObstacle = Math.abs(dinoPosition - obstacle.position) < 3;
      
      if (isNearObstacle && !isJumping) {
        onCollision();
      } else if (isNearObstacle && isJumping) {
        if (score < currentSection) {
          setScore(currentSection);
        }
      }
    });
  }, [dinoPosition, isJumping, obstacles, currentSection, score, onCollision]);

  return (
    <div className="fixed bottom-0 left-0 w-full h-32 bg-white dark:bg-black border-t-2 border-black dark:border-white">
      <div className="absolute top-2 right-4 text-black dark:text-white">
        Sections cleared: {score}/{totalSections - 1}
      </div>
      
      <div className="relative w-full h-full">
        <DinoCharacter 
          position={dinoPosition} 
          isJumping={isJumping}
          onJump={onJump}
        />
        
        {obstacles.map(obstacle => (
          <Obstacle 
            key={obstacle.id}
            id={obstacle.id}
            position={obstacle.position}
            size={obstacle.size}
          />
        ))}
        
        <div className="absolute bottom-0 w-full h-0.5 bg-black dark:bg-white"></div>
      </div>
    </div>
  );
};

export default GameWorld;
