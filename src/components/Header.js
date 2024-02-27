import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import logo from '../images/ramheart.png';

const logoAnimation = {
    initial: {
        scale: 0.8,
        opacity: 0
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
};


const Header = () => {
    return (
        <header className="header">
            <div className="logo-section">
                <motion.img
                    src={logo}
                    alt="RamHeart Connect Logo"
                    className="logo"
                    initial="initial"
                    animate="animate"
                    variants={logoAnimation}
                />
            </div>
            <nav className="navigation">
                <Link to="home-section" className="nav-link" smooth={true} duration={500}>Home</Link>
                <Link to="about-section" className="nav-link" smooth={true} duration={500}>About</Link>
                <Link to="search-section" className="nav-link" smooth={true} duration={500}>Search Conditions</Link>
                <Link to="directory-section" className="nav-link" smooth={true} duration={500}>Directory</Link>
                <Link to="stories-section" className="nav-link" smooth={true} duration={500}>Stories</Link>
                <Link to="share-story-section" className="nav-link" smooth={true} duration={500}>Share Your Story ❤️</Link>
            </nav>
        </header>
    );
};

export default Header;
