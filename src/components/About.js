import React, { useState } from 'react';
import './About.css';

function About() {
  const [activeTab, setActiveTab] = useState('overview');

  const contactInfo = {
    email: 'sravanthigantasala.96@gmail.com',
    phone: '(+45)-917959898',
    location: 'Aarhus/Copenhagen, Denmark',
    linkedin: 'linkedin.com/in/sravanthigantasala'
  };

  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1>About Me</h1>
          <p>Full Stack & Salesforce Developer | AI Enthusiast</p>
        </div>

        <div className="about-content">
          <div className="card profile-card">
            <div className="profile-header">
              <h2>Sai Sravanthi G</h2>
              <div className="tabs">
                <button 
                  className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button 
                  className={`tab ${activeTab === 'contact' ? 'active' : ''}`}
                  onClick={() => setActiveTab('contact')}
                >
                  Contact
                </button>
              </div>
            </div>

            {activeTab === 'overview' && (
              <div className="tab-content">
                <p className="intro-text">
                  I am an experienced Full-Stack and Salesforce Developer with approximately 
                  seven years of experience delivering scalable, user-focused solutions across 
                  multiple industries.
                </p>
                <p>
                  I am currently expanding my capabilities in modern front-end engineering, 
                  focusing on workflow automation and AI-driven development. I'm actively learning 
                  React with a focus on component-based architecture, core JavaScript principles, 
                  and building responsive, user-centric interfaces.
                </p>
                <p>
                  My understanding of AI concepts supports my interest in applying automation to 
                  improve efficiency and reusability in development processes. I enjoy simplifying 
                  complexity, collaborating across teams, and turning business needs into practical, 
                  maintainable solutions.
                </p>
                <div className="highlights">
                  <div className="highlight-item">
                    <strong>Problem-Solving:</strong> Strong problem-solving skills with a proactive mindset
                  </div>
                  <div className="highlight-item">
                    <strong>Continuous Learning:</strong> Motivated to contribute technical foundation, 
                    curiosity, and growing front-end expertise
                  </div>
                  <div className="highlight-item">
                    <strong>Innovation:</strong> Excited to contribute to innovative workflow and 
                    AI-enabled projects within a dynamic, cross-functional team
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="tab-content contact-info">
                <div className="contact-item">
                  <span className="contact-label">Email:</span>
                  <a href={`mailto:${contactInfo.email}`} className="contact-value">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Phone:</span>
                  <a href={`tel:${contactInfo.phone}`} className="contact-value">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Location:</span>
                  <span className="contact-value">{contactInfo.location}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">LinkedIn:</span>
                  <a 
                    href={`https://www.${contactInfo.linkedin}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    {contactInfo.linkedin}
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="card goals-card">
            <h2>My Goals</h2>
            <ul className="goals-list">
              <li>
                Strengthen React expertise for modern front-end roles
              </li>
              <li>
                Apply AI concepts to enhance automation and developer productivity
              </li>
              <li>
                Build intuitive interfaces that support intelligent, scalable solutions
              </li>
              <li>
                Contribute to collaborative, innovative teams in Denmark
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

