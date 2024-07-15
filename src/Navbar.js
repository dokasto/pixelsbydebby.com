import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar"
    >
      <div className="navbar-brand">
        <h1>DN<span>.</span></h1>
      </div>
      <ul className="navbar-links">
        <li>
          <ScrollLink to="intro" smooth={true} duration={500}>Home</ScrollLink>
        </li>
        <li>
          <ScrollLink to="works" smooth={true} duration={500}>My Works</ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
        </li>
        <li>
          <ScrollLink to="resume" smooth={true} duration={500}>Resume</ScrollLink>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
