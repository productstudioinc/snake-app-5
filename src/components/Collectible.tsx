import React from 'react';
import './Collectible.css';

const Collectible = ({ position }) => {
  return <div className="collectible" style={{ top: position.y, left: position.x }} />;
};

export default Collectible;