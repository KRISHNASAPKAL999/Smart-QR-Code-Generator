/**
 * Footer Component – App footer with copyright and links
 */
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-container">

        <div className="footer-top">
          <span className="footer-logo">
            Smart<span className="footer-logo-highlight">QR</span>
          </span>
          <p className="footer-tagline">Generate. Download. Share. Instantly.</p>
        </div>

        <div className="footer-links">
          <a href="#generator" className="footer-link">Generator</a>
          <a href="#history"   className="footer-link">History</a>
          <a href="#about"     className="footer-link">About</a>
          <a href="https://digitalheroesco.com" target="_blank" rel="noopener noreferrer" className="footer-link footer-dh-link">
            Digital Heroes ↗
          </a>
        </div>

        <div className="footer-divider" />

        {/* REQUIRED: © 2026 Krishna Sapkal */}
        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 Krishna Sapkal. All rights reserved.</p>
          <p className="footer-built">Built with ⚡ React + Vite</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
