// src/components/Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="navbar">
      <div className="navbar-brand">Yoga Studio</div>
      <button
        className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </button>
      <nav className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/schedule" onClick={closeMenu}>Classes & Schedule</Link></li>
          <li><Link to="/pricing" onClick={closeMenu}>Pricing & Membership</Link></li>
          <li><Link to="/gallery" onClick={closeMenu}>Gallery & Testimonials</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
          <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;