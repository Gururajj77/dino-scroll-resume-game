
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
}

interface ObstacleData {
  id: number;
  position: number;
  size: { width: number; height: number };
}

const GameWorld: React.FC<GameWorldProps> = ({ 
  scrollProgress, 
  currentSection,
  totalSections,
  onCollision,
  isJumping,
  onJump
}) => {
  const [score, setScore] = useState(0);
  const [dinoPosition, setDinoPosition] = useState(0);
  const moveSpeed = 2; // Pixels per frame
  
  // Generate obstacles at section boundaries
  const obstacles: ObstacleData[] = [];
  for (let i = 1; i < totalSections; i++) {
    obstacles.push({
      id: i,
      position: (i / totalSections) * 100,
      size: { width: 20, height: 30 + (i * 5) }
    });
  }

  // Handle right arrow key movement
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setDinoPosition(prev => Math.min(prev + moveSpeed, scrollProgress * 100));
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [scrollProgress]);

  // Collision detection with reduced collision area
  useEffect(() => {
    obstacles.forEach(obstacle => {
      const obstacleElement = document.querySelector(`[data-collision-width]`);
      if (!obstacleElement) return;

      const collisionWidth = parseFloat(obstacleElement.getAttribute('data-collision-width') || '0');
      const collisionHeight = parseFloat(obstacleElement.getAttribute('data-collision-height') || '0');
      
      const isNearObstacle = Math.abs(dinoPosition - obstacle.position) < (collisionWidth / 100);
      
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
