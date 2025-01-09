import React from 'react';
import './Wolf.css';

const Wolf = ({ position }) => {
  return <div className="wolf" style={{ top: position.y, left: position.x }} />;
};

export default Wolf;