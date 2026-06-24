/**
 * HeroSection Component – Landing hero with animated gradient orbs
 */
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />
      <div className="hero-orb hero-orb-3" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Free &amp; Open Source Tool
        </div>

        <h1 className="hero-title">
          Smart <span className="hero-gradient-text">QR Code</span>
          <br />Generator
        </h1>

        <p className="hero-subtitle">
          Instantly convert any text, URL, email, or phone number into a
          high-quality, scannable QR code — no sign-up required.
        </p>

        <div className="hero-actions">
          <a href="#generator" className="btn btn-primary hero-btn">⚡ Generate Now</a>
          <a href="#about" className="btn btn-outline hero-btn">Learn More</a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Free</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">0</span>
            <span className="stat-label">Sign-up</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Generations</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
