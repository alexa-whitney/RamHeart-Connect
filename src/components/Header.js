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
            <nav className="top-navigation">
                <Link to="home-section" className="nav-link" smooth={true} duration={500}>Home</Link>
                <Link to="about-section" className="nav-link" smooth={true} duration={500}>About</Link>
                <Link to="search-section" className="nav-link" smooth={true} duration={500}>Search Conditions</Link>
                <Link to="directory-section" className="nav-link" smooth={true} duration={500}>Resource Directory</Link>
            </nav>
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
        </header>
    );
};

export default Header;

