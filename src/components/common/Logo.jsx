import React from 'react';
import logoImg from '../../assets/logo.png';

const Logo = ({ className = "w-12 h-12", scrolled = false }) => {
  return (
    <div className={`relative ${className} bg-white rounded-full p-1.5 shadow-lg ring-4 ring-white/10 transition-all duration-300`}>
      <img src={logoImg} alt="Seven Seas Educational Consultancy" className="w-full h-full object-contain" />
    </div>
  );
};

export default Logo;
