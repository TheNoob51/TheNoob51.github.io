import React, { useState } from 'react';
import '../styles/components/Contact.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Send,
  MessageCircle,
  User,
  Calendar
} from 'lucide-react';

const contactDetails = {
  email: "gyanv.official@gmail.com",
  phone: "+91 9905426966",
  linkedin: "https://www.linkedin.com/in/gyan-vardhan/",
  github: "https://github.com/GyanVardhan11/",
  location: "Bhopal, India"
};

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      alert('Thank you for your message! I\'ll get back to you soon.');
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: contactDetails.email,
      href: `mailto:${contactDetails.email}`,
      color: "var(--primary-accent)"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "Connect with me",
      href: contactDetails.linkedin,
      color: "var(--secondary-accent)"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "View my code",
      href: contactDetails.github,
      color: "var(--tertiary-accent)"
    }
  ];

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

  return (
    <section className="contact-container">
      <div className="container">
        <motion.div
          ref={ref}
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="contact-header">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              Get In Touch
            </motion.h2>
            <motion.p
              className="contact-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's collaborate and build something amazing together. I'm always open to discussing new opportunities and innovative projects.
            </motion.p>
            <div className="section-divider"></div>
          </div>

          <div className="contact-grid">
            <motion.div className="contact-info" variants={itemVariants}>
              <div className="contact-intro">
                <div className="intro-icon">
                  <MessageCircle size={32} />
                </div>
                <h3>Let's Start a Conversation</h3>
                <p>
                  Whether you have a project in mind, want to collaborate, or just want to say hello,
                  I'd love to hear from you. Drop me a message and let's create something extraordinary together.
                </p>
              </div>

              <div className="contact-methods">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact-method"
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    style={{ '--method-color': method.color }}
                  >
                    <div className="method-icon">
                      {method.icon}
                    </div>
                    <div className="method-info">
                      <h4>{method.label}</h4>
                      <p>{method.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* <div className="contact-location">
                <div className="location-icon">
                  <MapPin size={20} />
                </div>
                <span>{contactDetails.location}</span>
              </div> */}
            </motion.div>

            <motion.div className="contact-form-container" variants={itemVariants}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="input-group">
                    <User size={20} className="input-icon" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group">
                    <Mail size={20} className="input-icon" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group">
                    <MessageCircle size={20} className="input-icon" />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group textarea-group">
                    <MessageCircle size={20} className="input-icon" />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="6"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="loading-spinner"></div>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
