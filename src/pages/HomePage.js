import React from 'react';
import Navbar from '../components/layout/Navbar'; // Import Navbar
import Footer from '../components/layout/Footer'; // Import Footer
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <div id="hero" className="bg-primary"><Hero /></div>
        <div id="about" className="bg-secondary section"><About /></div>
        <div id="education" className="bg-tertiary section"><Education /></div>
        <div id="certifications" className="bg-secondary section"><Certifications /></div>
        <div id="skills" className="bg-tertiary section"><Skills /></div>
        <div id="projects" className="bg-secondary section"><Projects /></div>
        <div id="achievements" className="bg-tertiary section"><Achievements /></div>
        <div id="contact" className="bg-secondary section"><Contact /></div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
