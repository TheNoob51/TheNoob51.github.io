import React from 'react';
import { certificationsData } from '../assets/data/achievementsData';
import '../styles/components/Certifications.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section className="certifications-container">
      <div className="container">
        <motion.div
          ref={ref}
          className="certifications-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="certifications-header">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              Certifications
            </motion.h2>
            <motion.p
              className="certifications-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Professional certifications and credentials that validate my expertise
            </motion.p>
            <div className="section-divider"></div>
          </div>

          <div className="certifications-grid">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="certification-card"
                variants={itemVariants}
                whileHover={{ y: -8, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="cert-header">
                  <div className="cert-icon">
                    <Award size={24} />
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link-btn"
                      title="View Certificate"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                <div className="cert-content">
                  <h3 className="cert-name">{cert.name}</h3>
                  
                  <div className="cert-meta">
                    <div className="cert-issuer">
                      <Building size={16} />
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="cert-date">
                      <Calendar size={16} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>



                <div className="cert-glow"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 