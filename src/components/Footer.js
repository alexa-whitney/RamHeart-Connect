import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© {new Date().getFullYear()} RamHeart Connect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

