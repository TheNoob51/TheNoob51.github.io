import React from 'react';
import achievementsData from '../assets/data/achievementsData';
import '../styles/components/Achievements.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Trophy, 
  Award, 
  Star, 
  Rocket, 
  Users, 
  BookOpen,
  Calendar,
  MapPin
} from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Get achievement icon based on content
  const getAchievementIcon = (text, institution) => {
    if (text.includes('NASA') || text.includes('Space')) {
      return <Rocket size={24} />;
    } else if (text.includes('research') || text.includes('paper')) {
      return <BookOpen size={24} />;
    } else if (text.includes('Team') || text.includes('GDSC')) {
      return <Users size={24} />;
    } else if (text.includes('open-source') || text.includes('GirlScript')) {
      return <Star size={24} />;
    } else {
      return <Trophy size={24} />;
    }
  };

  // Get achievement category for styling
  const getAchievementCategory = (text, institution) => {
    if (text.includes('NASA') || text.includes('Space')) {
      return 'space';
    } else if (text.includes('research') || text.includes('paper')) {
      return 'research';
    } else if (text.includes('Team') || text.includes('GDSC')) {
      return 'leadership';
    } else if (text.includes('open-source') || text.includes('GirlScript')) {
      return 'opensource';
    } else {
      return 'general';
    }
  };

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
    <section className="achievements-container">
      <div className="container">
        <motion.div
          ref={ref}
          className="achievements-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="achievements-header">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              Achievements & Recognitions
            </motion.h2>
            <motion.p
              className="achievements-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Milestones and recognitions that mark my journey in technology and innovation
            </motion.p>
            <div className="section-divider"></div>
          </div>

          <div className="achievements-timeline">
            {achievementsData.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className={`achievement-item ${getAchievementCategory(achievement.text, achievement.institution)}`}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="achievement-icon">
                  {getAchievementIcon(achievement.text, achievement.institution)}
                </div>
                
                <div className="achievement-content">
                  <div className="achievement-main">
                    <h3 className="achievement-text">{achievement.text}</h3>
                    
                    <div className="achievement-meta">
                      {achievement.institution && (
                        <div className="achievement-institution">
                          <MapPin size={16} />
                          <span>{achievement.institution}</span>
                        </div>
                      )}
                      {achievement.date && (
                        <div className="achievement-date">
                          <Calendar size={16} />
                          <span>{achievement.date}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="achievement-glow"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
