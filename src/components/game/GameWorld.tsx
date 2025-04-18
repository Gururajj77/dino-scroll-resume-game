
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
  
  // Generate obstacles at section boundaries
  const obstacles: ObstacleData[] = [];
  for (let i = 1; i < totalSections; i++) {
    obstacles.push({
      id: i,
      position: (i / totalSections) * 100,
      size: { width: 20, height: 30 + (i * 5) } // Obstacles get progressively taller
    });
  }

  // Collision detection
  useEffect(() => {
    const dinoPosition = scrollProgress * 100;
    
    // Simple collision detection
    obstacles.forEach(obstacle => {
      const isNearObstacle = Math.abs(dinoPosition - obstacle.position) < 5;
      
      if (isNearObstacle && !isJumping) {
        // Collision detected!
        onCollision();
      } else if (isNearObstacle && isJumping) {
        // Successfully jumped over
        if (score < currentSection) {
          setScore(currentSection);
        }
      }
    });
  }, [scrollProgress, isJumping, obstacles, currentSection, score, onCollision]);

  return (
    <div className="fixed bottom-0 left-0 w-full h-32 bg-white border-t-2 border-black">
      {/* Score counter */}
      <div className="absolute top-2 right-4 text-black">
        Sections cleared: {score}/{totalSections - 1}
      </div>
      
      {/* Game area */}
      <div className="relative w-full h-full">
        <DinoCharacter 
          position={scrollProgress * 100} 
          isJumping={isJumping}
          onJump={onJump}
        />
        
        {/* Render obstacles */}
        {obstacles.map(obstacle => (
          <Obstacle 
            key={obstacle.id}
            position={obstacle.position}
            size={obstacle.size}
          />
        ))}
        
        {/* Ground line */}
        <div className="absolute bottom-0 w-full h-0.5 bg-black"></div>
      </div>
    </div>
  );
};

export default GameWorld;
