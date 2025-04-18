
import React from 'react';

interface ObstacleProps {
  position: number;
  size: { width: number; height: number };
  id: number;
}

const Obstacle: React.FC<ObstacleProps> = ({ position, size, id }) => {
  const getShape = (id: number) => {
    switch (id % 5) {
      case 0:
        return "clip-path-circle";
      case 1:
        return "clip-path-triangle";
      case 2:
        return "clip-path-diamond";
      case 3:
        return "clip-path-hexagon";
      default:
        return "";
    }
  };

  // Reduced collision area
  const collisionSize = {
    width: size.width * 0.6,
    height: size.height * 0.6
  };

  return (
    <div
      className={`absolute bottom-0 bg-black dark:bg-white ${getShape(id)}`}
      style={{ 
        left: `${position}%`, 
        width: `${size.width}px`, 
        height: `${size.height}px`,
      }}
      data-collision="true"
      data-collision-width={collisionSize.width}
      data-collision-height={collisionSize.height}
    />
  );
};

export default Obstacle;
