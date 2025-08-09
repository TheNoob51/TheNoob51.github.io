import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../../styles/components/layout/Footer.css'; // Create this CSS file next

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/gyan-vardhan/", // Replace with actual
    github: "https://github.com/GyanVardhan11/",       // Replace with actual
    email: "gyanv.official@gmail.com"
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social-links">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={`mailto:${socialLinks.email}`} aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        <div className="footer-copyright">
          <p>&copy; {currentYear} Gyan Vardhan. All rights reserved.</p>
        </div>
        <div className="footer-credits">
          <p>Designed with <span className="heart-icon">&hearts;</span> and React. Coded in a Neon Lit Room.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
