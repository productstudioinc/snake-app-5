import React from 'react';
import './Controls.css';

const Controls = ({ onMove }) => {
  return (
    <div className="controls">
      <button onClick={() => onMove('up')}>Up</button>
      <button onClick={() => onMove('down')}>Down</button>
      <button onClick={() => onMove('left')}>Left</button>
      <button onClick={() => onMove('right')}>Right</button>
    </div>
  );
};

export default Controls;