import '../styles/grid-3d.css';
import React from 'react';

export interface Grid3DProps {
  width?: number;
  height?: number;
}

export default function Grid3D({ width = 30, height = 30 }: Grid3DProps) {
  const cells = [];
  for (let i = 0; i < width * height; i++) {
    cells.push(<div className="grid-3d__cell" key={i} />);
  }
  return (
    <div
      aria-hidden="true"
      className="grid-3d"
      style={{
        gridTemplateColumns: `repeat(${width}, 1fr)`,
        gridTemplateRows: `repeat(${height}, 1fr)`,
      }}
    >
      {cells.map(cell => cell)}
    </div>
  );
}
