import React from 'react';
import { educationData } from '../assets/data/achievementsData';
import '../styles/components/Education.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="education-container">
      <div className="container">
        <motion.div
          ref={ref}
          className="education-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="education-header">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              Education
            </motion.h2>
            <motion.p
              className="education-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Academic journey and qualifications that shaped my foundation
            </motion.p>
            <div className="section-divider"></div>
          </div>

          <div className="education-timeline">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="education-item"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="education-icon">
                  <GraduationCap size={24} />
                </div>

                <div className="education-content-card">
                  <div className="education-main">
                    <h3 className="education-degree">{edu.degree}</h3>

                    <div className="education-meta">
                      <div className="education-institution">
                        <MapPin size={16} />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="education-year">
                        <Calendar size={16} />
                        <span>{edu.year}</span>
                      </div>
                    </div>

                    {edu.details && (
                      <div className="education-details">
                        <Award size={16} />
                        <span>{edu.details}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="education-glow"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 