
import React from 'react';

interface ObstacleProps {
  position: number;
  size: { width: number; height: number };
}

const Obstacle: React.FC<ObstacleProps> = ({ position, size }) => {
  return (
    <div
      className="absolute bottom-0 bg-black"
      style={{ 
        left: `${position}%`, 
        width: `${size.width}px`, 
        height: `${size.height}px` 
      }}
    ></div>
  );
};

export default Obstacle;
