import React from 'react';
import { Link } from 'react-scroll';
import logo from '../images/ramheart.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <img src={logo} alt="RamHeart Connect Logo" className="logo" />
      </div>
      <nav className="navigation">
        <Link to="home-section" className="nav-link" smooth={true} duration={500}>Home</Link>
        <Link to="about-section" className="nav-link" smooth={true} duration={500}>About</Link>
        <Link to="resources-section" className="nav-link" smooth={true} duration={500}>Resources</Link>
        <Link to="directory-section" className="nav-link" smooth={true} duration={500}>Directory</Link>
        <Link to="stories-section" className="nav-link" smooth={true} duration={500}>Stories</Link>
        <Link to="share-story-section" className="nav-link" smooth={true} duration={500}>Share Your Story ❤️</Link>
      </nav>
    </header>
  );
};

export default Header;


