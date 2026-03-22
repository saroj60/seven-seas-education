import React from 'react';

const Logo = ({ className = "w-12 h-12", scrolled = false }) => {
  return (
    <div className={`relative ${className} transition-all duration-300`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* Precise Interlocking Z-Shape */}
        {/* Piece 1: Vibrant Orange (Top and Right Diagonal) */}
        <path
          d="M 20 20 H 80 L 50 80"
          stroke="#FF6B35"
          strokeWidth="18"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          className="transition-all duration-300 transform-gpu hover:scale-105"
        />
        {/* Piece 2: Deep Blue (Bottom and Left Diagonal) */}
        <path
          d="M 80 80 H 20 L 50 20"
          stroke="#1E40AF"
          strokeWidth="18"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          className="transition-all duration-300 transform-gpu hover:scale-105"
        />
      </svg>
    </div>
  );
};

export default Logo;
