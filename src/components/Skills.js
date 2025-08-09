import React from 'react';
import '../styles/components/Skills.css';
import { skillsData } from '../assets/data/skillsData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Map skill names to logo image filenames
const logoMap = {
  'Python': 'Python.png',
  'Java': 'Java.png',
  'MySQL': 'MySQL.png',
  'Agentic AI (n8n)': 'AgenticAI.png',
  'TensorFlow': 'TensorFlow.png',
  'LangChain': 'langchain-color.png',
  'LLamaIndex': 'ollama.png',
  'Numpy': 'NumPy.png',
  'Pandas': 'Pandas.png',
  'Matplotlib': 'Matplotlib.png',
  'Scikit-learn': 'scikit-learn.png',
  'Flutter (Mobile/Web)': 'Flutter.png',
  'Firebase (ML Integrations)': 'Firebase.png',
  'Git': 'Git.png',
  'AWS': 'AWS.png',
  'Docker': 'Docker.png',
  'Kubernetes': 'Kubernetes.png',
};

// Category colors for better visual organization
const categoryColors = {
  "Programming Languages": "var(--primary-accent)",
  "AI/ML & Data Science": "var(--secondary-accent)",
  "Tools & Deployment": "var(--tertiary-accent)"
};

const SkillCube = ({ name, index }) => {
  const logoFile = logoMap[name];
  return (
    <motion.div
      className="skill-cube"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
      whileHover={{
        scale: 1.08,
        y: -8,
        transition: { duration: 0.2 }
      }}
    >
      <div className="skill-logo-container">
        {logoFile ? (
          <img
            src={require(`../assets/images/logos/${logoFile}`)}
            alt={name + ' logo'}
            className="skill-logo-img"
          />
        ) : (
          <div className="skill-placeholder">
            <span>{name.charAt(0)}</span>
          </div>
        )}
      </div>
      <span className="skill-tooltip">{name}</span>
    </motion.div>
  );
};

const SkillJar = ({ category, skillsList, categoryIndex }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categoryColor = categoryColors[category] || "var(--primary-accent)";

  return (
    <motion.div
      ref={ref}
      className="skill-category"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
      style={{ '--category-color': categoryColor }}
    >
      <div className="category-header">
        <h3>{category}</h3>
        <div className="category-divider"></div>
      </div>
      <div className="skill-jar">
        {skillsList.map((skill, index) => (
          <SkillCube key={skill.name} name={skill.name} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="skills-container">
      <div className="container">
        <motion.div
          ref={ref}
          className="skills-content"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="skills-header">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              Technical Skills
            </motion.h2>
            <motion.p
              className="skills-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Technologies and tools I use to bring ideas to life
            </motion.p>
            <div className="section-divider"></div>
          </div>

          <div className="skills-grid">
            {Object.entries(skillsData).map(([category, skillsList], index) => (
              <SkillJar
                key={category}
                category={category}
                skillsList={skillsList}
                categoryIndex={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
