/**
 * About / Profile Section
 * Required assignment section: displays author details and Digital Heroes CTA.
 */
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="glass-card about-card">

        {/* ── Section heading ───────────────────────────────── */}
        <div className="about-header">
          <h3 className="about-title">
            <span>👤</span> About the Developer
          </h3>
        </div>

        {/* ── Author details – REQUIRED by assignment ────────── */}
        <div className="profile-info">
          {/* Initials avatar */}
          <div className="profile-avatar">KS</div>

          <div className="profile-details">
            <div className="profile-row">
              <span className="profile-label">Full Name:</span>
              <span className="profile-value">Krishna Sapkal</span>
            </div>

            <div className="profile-row">
              <span className="profile-label">Email:</span>
              <span className="profile-value">
                <a href="mailto:shrikrishnasapkal9@gmail.com" className="profile-link">
                  shrikrishnasapkal9@gmail.com
                </a>
              </span>
            </div>

            <div className="profile-row">
              <span className="profile-label">Role:</span>
              <span className="profile-value">Full Stack Developer</span>
            </div>

            <div className="profile-row">
              <span className="profile-label">Project:</span>
              <span className="profile-value">Smart QR Code Generator</span>
            </div>
          </div>
        </div>

        {/* ── Skills / Tech stack ───────────────────────────── */}
        <div className="skills-area">
          <p className="skills-label">Tech Stack</p>
          <div className="skill-tags">
            {['React', 'Vite', 'JavaScript', 'CSS3', 'localStorage', 'QR Code'].map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ── REQUIRED: "Built for Digital Heroes" button ───── */}
        <div className="dh-cta">
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dh"
            id="built-for-digital-heroes"
          >
            🚀 Built for Digital Heroes
          </a>
          <p className="dh-note">
            This project was built as part of the Digital Heroes Co. developer program.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
