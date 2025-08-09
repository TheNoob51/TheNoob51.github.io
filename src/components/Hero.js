import React from 'react';
import '../styles/components/Hero.css';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const resumeFileName = "Gyan_Vardhan_Resume.pdf";

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-container">
      {/* Floating Background Elements */}
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Gyan Vardhan
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="highlight">AI & Android Developer</span> | Crafting Intelligent Experiences
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Passionate B.Tech Computer Science student specializing in AI/ML and Android Development, 
          dedicated to building innovative and impactful solutions that bridge technology and human experience.
        </motion.p>
        
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <a
            href={`/documents/${resumeFileName}`}
            download={resumeFileName}
            className="resume-button"
          >
            <Download size={20} />
            Download Resume
          </a>
          
          <a
            href="#contact"
            onClick={handleContactClick}
            className="contact-button"
          >
            <Mail size={20} />
            Get In Touch
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="scroll-down-link"
        onClick={handleScrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className="scroll-down-arrow"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
