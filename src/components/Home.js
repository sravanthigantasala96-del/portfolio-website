import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'Full Stack Developer',
    'Salesforce Developer',
    'AI Enthusiast',
    'React Learner'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Sai Sravanthi G</span>
          </h1>
          <div className="role-display">
            <span className="role-label">I'm a</span>
            <span className="role-text" key={currentRole}>
              {roles[currentRole]}
            </span>
          </div>
          <p className="hero-description">
            Experienced developer with 7+ years in Full-Stack and Salesforce development,
            currently expanding expertise in modern React development and AI-driven solutions.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              Learn More About Me
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              View My Work
            </Link>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-number">7+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">Multiple</div>
            <div className="stat-label">Certifications</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">AI/ML</div>
            <div className="stat-label">Post Graduate</div>
          </div>
        </div>
      </div>
      
      <div className="quick-links">
        <div className="container">
          <h2>Explore My Profile</h2>
          <div className="links-grid">
            <Link to="/experience" className="link-card">
              <h3>Professional Experience</h3>
              <p>7+ years of delivering scalable solutions</p>
            </Link>
            <Link to="/education" className="link-card">
              <h3>Education & Learning</h3>
              <p>Continuous learning in React and AI</p>
            </Link>
            <Link to="/skills" className="link-card">
              <h3>Technical Skills</h3>
              <p>Full-stack and Salesforce expertise</p>
            </Link>
            <Link to="/projects" className="link-card">
              <h3>Projects & Portfolio</h3>
              <p>Real-world applications and solutions</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

