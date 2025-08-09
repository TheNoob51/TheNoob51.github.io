import React from 'react';
import '../../styles/components/common/ProjectCard.css';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Lightbulb } from 'lucide-react';

const ProjectCard = ({ project, index, inView }) => {
  const { title, description, techStack, imageUrl } = project;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      },
    },
  };

  // Get project type icon based on tech stack
  const getProjectIcon = () => {
    if (techStack.some(tech => tech.includes('Flutter') || tech.includes('Unity'))) {
      return <Code size={24} />;
    } else if (techStack.some(tech => tech.includes('Python') || tech.includes('Pandas'))) {
      return <Lightbulb size={24} />;
    } else {
      return <Github size={24} />;
    }
  };

  return (
    <motion.div
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-card-inner">
        <div className="project-header">
          <div className="project-icon">
            {getProjectIcon()}
          </div>
          <div className="project-actions">
            <button className="action-btn" title="View Details">
              <ExternalLink size={18} />
            </button>
          </div>
        </div>

        {imageUrl && (
          <div className="project-image-container">
            <img src={imageUrl} alt={title} className="project-image" />
            <div className="image-overlay"></div>
          </div>
        )}

        <div className="project-content">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
        </div>

        <div className="project-footer">
          <div className="project-tech-stack">
            {techStack.slice(0, 3).map((tech, techIndex) => (
              <span key={techIndex} className="tech-tag">
                {tech}
              </span>
            ))}
            {techStack.length > 3 && (
              <span className="tech-tag more">+{techStack.length - 3}</span>
            )}
          </div>
        </div>

        <div className="project-glow"></div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
