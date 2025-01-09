import React, { useState, useEffect } from 'react';
import Wolf from './Wolf';
import Collectible from './Collectible';
import './GameBoard.css';

const GameBoard = () => {
  const [wolfPosition, setWolfPosition] = useState({ x: 0, y: 0 });
  const [collectibles, setCollectibles] = useState([{ x: 5, y: 5 }]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Game logic for movement and collision detection
  }, [wolfPosition]);

  return (
    <div className="game-board">
      <Wolf position={wolfPosition} />
      {collectibles.map((item, index) => (
        <Collectible key={index} position={item} />
      ))}
    </div>
  );
};

export default GameBoard;