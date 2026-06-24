/**
 * Navbar Component – Fixed glassmorphism navigation bar
 */
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor"/>
              <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor"/>
              <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor"/>
              <rect x="14" y="14" width="3" height="3" rx="0.5" fill="currentColor"/>
              <rect x="18" y="14" width="3" height="3" rx="0.5" fill="currentColor"/>
              <rect x="14" y="18" width="3" height="3" rx="0.5" fill="currentColor"/>
              <rect x="18" y="18" width="3" height="3" rx="0.5" fill="currentColor"/>
            </svg>
          </div>
          <span className="logo-text">
            Smart<span className="logo-highlight">QR</span>
          </span>
        </div>

        <div className="navbar-links">
          <a href="#generator" className="nav-link">Generator</a>
          <a href="#history" className="nav-link">History</a>
          <a href="#about" className="nav-link">About</a>
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-btn"
            id="digital-heroes-btn"
          >
            Built for Digital Heroes
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
