import React from 'react';
import './About.css';
import profilePhoto from '../images/SaiG_PP.jpeg';

function About() {
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
          <h1>Get to Know Me</h1>
          <p>Full Stack & Salesforce Developer | AI Enthusiast</p>
        </div>

        <div className="about-content">
          <div className="card profile-card">
            <div className="profile-photo-section">
              <img src={profilePhoto} alt="Sai Sravanthi G" className="profile-photo" />
            </div>

            <div className="overview-content">
              <p className="intro-text">
                I am an experienced Full-Stack and Salesforce Developer with about seven years of 
                experience delivering scalable, user-focused solutions. My journey began in full-stack 
                development and evolved into a Salesforce-focused career where I've built, optimized and 
                integrated solutions across different industries.
              </p>
              <p>
                I specialize in Apex, Lightning Web Components (LWC), Flows, and system integrations using 
                REST/SOAP APIs. I'm passionate about simplifying complexity, whether through modular architecture, 
                declarative automation, or mentoring teammates on best practices. I also bring a strong foundation 
                in CI/CD, Agile methodologies, and DevOps practices. I'm expanding my capabilities in modern 
                front-end engineering, workflow automation, and AI-driven development, currently learning React 
                with a focus on component-based architecture and building responsive, user-centric interfaces.
              </p>
              <p>
                What sets me apart is my ability to bridge the gap between technical teams and business stakeholders. 
                I believe great software is not just about clean code - it's about understanding the people who use it. 
                With strong problem-solving skills and a proactive mindset, I thrive in collaborative, cross-functional 
                environments and enjoy turning business needs into practical, maintainable solutions. I'm motivated by 
                the chance to build intuitive interfaces that support intelligent, scalable, 'build once – use many times' 
                solutions and to contribute my technical foundation, curiosity, and growing front-end expertise to innovative 
                workflow and AI-enabled projects.
              </p>
            </div>      
          </div>

          <div className="card personal-card">
            <h2>Beyond Work</h2>
            <div className="personal-info">
              <p className="personal-background">💑 Happily Married Since 2018</p>
              <div className="personal-section">
                <h4>Hobbies & Interests</h4>
                <div className="personal-tags">
                  <span className="personal-tag">🍳 Cooking</span>
                  <span className="personal-tag">💪 Fitness</span>
                  <span className="personal-tag">📚 Reading</span>
                </div>
              </div>
              <div className="personal-section">
                <h4>Free Time Activities</h4>
                <div className="personal-tags">
                  <span className="personal-tag">🏸 Badminton</span>
                  <span className="personal-tag">💃 Dancing</span>
                  <span className="personal-tag">✈️ Travelling</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card goals-card">
            <h2>My Goals</h2>
            <ul className="goals-list">
              <li>
                Build intuitive interfaces that support intelligent, scalable, 'build once – use many times' solutions
              </li>
              <li>
                Bridge the gap between technical teams and business stakeholders in collaborative, cross-functional environments
              </li>
              <li>
                Apply AI and automation to improve development workflows and system efficiency
              </li>
              <li>
                Continue building my career in Denmark, bringing together enterprise platform experience, front-end development, and workflow-oriented thinking
              </li>
            </ul>
          </div>

          <div className="card languages-card">
            <h2>Languages</h2>
            <div className="languages-list">
              <div className="language-item">
                <span className="language-name">English</span>
                <span className="language-level">Proficient</span>
              </div>
              <div className="language-item">
                <span className="language-name">Telugu</span>
                <span className="language-level">Native</span>
              </div>
              <div className="language-item">
                <span className="language-name">Danish</span>
                <span className="language-level">Intermediate</span>
              </div>
            </div>
          </div>

          <div className="card contact-card">
            <h2>Contact</h2>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">📧 Email:</span>
                <a href={`mailto:${contactInfo.email}`} className="contact-value">
                  {contactInfo.email}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">📱 Phone:</span>
                <a href={`tel:${contactInfo.phone}`} className="contact-value">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">📍 Location:</span>
                <span className="contact-value">{contactInfo.location}</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">💼 LinkedIn:</span>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

