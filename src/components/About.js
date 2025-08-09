import React from 'react';
import '../styles/components/About.css';
import { Code, Brain, Smartphone, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const highlights = [
    {
      icon: <GraduationCap size={24} />,
      title: "Academic Excellence",
      description: "CGPA 9.04 at VIT Bhopal",
    },
    {
      icon: <Brain size={24} />,
      title: "AI/ML Specialist",
      description: "Deep learning & intelligent systems",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Android Developer",
      description: "Native mobile applications",
    },
    {
      icon: <Code size={24} />,
      title: "Problem Solver",
      description: "Real-world tech solutions",
    },
  ];

  return (
    <section className="about-container">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="about-header" variants={itemVariants}>
            <h2>About Me</h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <p className="about-intro">
                I am <span className="highlight">Gyan Vardhan</span>, a passionate B.Tech Computer Science student 
                at Vellore Institute of Technology, Bhopal, graduating in 2026. With a strong academic foundation 
                and a CGPA of 9.04, I'm dedicated to leveraging technology to solve real-world problems.
              </p>
              
              <p>
                My expertise lies in <span className="highlight">Artificial Intelligence/Machine Learning</span> and 
                <span className="highlight"> Android Development</span>. I constantly explore new advancements 
                in these fields, seeking opportunities to apply my skills in innovative and impactful ways.
              </p>

              <p>
                I believe in the power of technology to transform lives and am committed to building solutions 
                that bridge the gap between complex algorithms and user-friendly experiences.
              </p>
            </motion.div>

            <motion.div className="about-visual" variants={itemVariants}>
              <div className="profile-card glass">
                <div className="profile-avatar">
                  <span>GV</span>
                </div>
                <div className="profile-info">
                  <h3>Gyan Vardhan</h3>
                  <p>AI & Android Developer</p>
                  <div className="profile-stats">
                    <div className="stat">
                      <span className="stat-number">9.04</span>
                      <span className="stat-label">CGPA</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">2026</span>
                      <span className="stat-label">Graduate</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div className="about-highlights" variants={itemVariants}>
            <div className="highlights-grid">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="highlight-card"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="highlight-icon">
                    {highlight.icon}
                  </div>
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
