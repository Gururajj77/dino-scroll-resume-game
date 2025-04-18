
import React from 'react';

interface ObstacleProps {
  position: number;
  size: { width: number; height: number };
  id: number;
}

const Obstacle: React.FC<ObstacleProps> = ({ position, size, id }) => {
  // Different shapes based on obstacle id
  const getShape = (id: number) => {
    switch (id % 5) {
      case 0:
        return "clip-path-circle"; // Circle
      case 1:
        return "clip-path-triangle"; // Triangle
      case 2:
        return "clip-path-diamond"; // Diamond
      case 3:
        return "clip-path-hexagon"; // Hexagon
      default:
        return ""; // Square (default)
    }
  };

  // Reduce collision area by 30%
  const collisionSize = {
    width: size.width * 0.7,
    height: size.height * 0.7
  };

  return (
    <div
      className={`absolute bottom-0 bg-black ${getShape(id)}`}
      style={{ 
        left: `${position}%`, 
        width: `${size.width}px`, 
        height: `${size.height}px`,
        // Add data attributes for collision detection
        '--collision-width': `${collisionSize.width}px`,
        '--collision-height': `${collisionSize.height}px`
      }}
      data-collision-width={collisionSize.width}
      data-collision-height={collisionSize.height}
    />
  );
};

export default Obstacle;
