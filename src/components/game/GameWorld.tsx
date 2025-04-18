
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
  const [isMovingRight, setIsMovingRight] = useState(false);
  const moveSpeed = 0.5; // Reduced speed for smoother movement
  
  // Generate obstacles at section boundaries
  const obstacles: ObstacleData[] = [];
  for (let i = 1; i < totalSections; i++) {
    obstacles.push({
      id: i,
      position: (i / totalSections) * 100,
      size: { width: 20, height: 30 + (i * 5) }
    });
  }

  // Sync dino position with scroll progress
  useEffect(() => {
    setDinoPosition(scrollProgress * 100);
  }, [scrollProgress]);

  // Handle right arrow key movement with continuous motion
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setIsMovingRight(true);
      }
      
      // Add jump ability when moving
      if ((e.key === 'ArrowUp' || e.key === ' ') && !isJumping) {
        onJump();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setIsMovingRight(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isJumping, onJump]);

  // Continuous movement when right arrow is pressed
  useEffect(() => {
    if (!isMovingRight) return;
    
    const moveInterval = setInterval(() => {
      setDinoPosition(prev => {
        // Calculate next position with speed limit
        const nextPos = Math.min(prev + moveSpeed, 100);
        return nextPos;
      });
    }, 16); // ~60fps
    
    return () => clearInterval(moveInterval);
  }, [isMovingRight, moveSpeed]);

  // Collision detection with reduced collision area
  useEffect(() => {
    obstacles.forEach(obstacle => {
      // Get all obstacles
      const obstacleElement = document.querySelector(`[data-collision-width]`);
      if (!obstacleElement) return;

      // Get collision sizes from data attributes
      const collisionWidth = parseFloat(obstacleElement.getAttribute('data-collision-width') || '0');
      const collisionHeight = parseFloat(obstacleElement.getAttribute('data-collision-height') || '0');
      
      // More forgiving collision detection
      const isNearObstacle = Math.abs(dinoPosition - obstacle.position) < (collisionWidth / 200);
      
      if (isNearObstacle && !isJumping) {
        onCollision();
      } else if (isNearObstacle && isJumping) {
        // Update score when successfully jumping over an obstacle
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
