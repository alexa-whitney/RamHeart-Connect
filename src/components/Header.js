import React from 'react';
import logo from '../images/ramheart.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <img src={logo} alt="RamHeart Connect Logo" className="logo" />
      </div>
      <nav className="navigation">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Stories</a>
        <a href="#" className="nav-link">Directory</a>
        <a href="#" className="nav-link">Contact</a>
        <a href="#" className="nav-link">Share Your Story ❤️</a>
      </nav>
    </header>
  );
};

export default Header;


