import React, { useState } from 'react';
import './Experience.css';

function Experience() {
  const [selectedCompany, setSelectedCompany] = useState(0);

  const experiences = [
    {
      company: 'Tata Consultancy Services',
      position: 'IT Analyst (Salesforce Developer)',
      location: 'Hyderabad, IN',
      period: 'June 2022 - September 2024',
      achievements: [
        'Boosted process efficiency by 20% and reduced operational costs by 12% by implementing complex Salesforce configurations and customizations',
        'Decreased lead conversion time by 50%, from 48 to 24 hours, and increased customer satisfaction by 9% by enhancing Sales and Service Cloud features',
        'Designed and maintained reusable LWC and Apex classes for consistent and maintainable codebases',
        'Resulted in a 36% improvement in page loading speed and a 20% increase in user satisfaction'
      ]
    },
    {
      company: 'Capgemini',
      position: '.NET Developer/Associate Consultant',
      location: 'Hyderabad, IN',
      period: 'July 2017 - May 2022',
      achievements: [
        'Increased user engagement by 26% by modeling and developing scalable web applications using JavaScript, ASP.NET MVC, and PL/SQL',
        'Improved front-end performance by optimizing JavaScript codebase, reducing load times by 15%',
        'Enhanced data integrity and system stability by spearheading MySQL database migration project',
        'Refactored front-end components to streamline performance, reduce redundant code, and improve responsiveness across user workflows',
        'Decreased bug detection time by 50% by enforcing automated testing procedures for web applications',
        'Led a small-scale project to build an internal tool, improving operational workflow efficiency by 15%'
      ]
    }
  ];

  return (
    <div className="experience-page">
      <div className="container">
        <div className="page-header">
          <h1>Professional Experience</h1>
          <p>7+ years of delivering scalable solutions across industries</p>
        </div>

        <div className="experience-container">
          <div className="company-selector">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`company-btn ${selectedCompany === index ? 'active' : ''}`}
                onClick={() => setSelectedCompany(index)}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div className="experience-detail">
            {experiences[selectedCompany] && (
              <div className="card experience-card">
                <div className="experience-header">
                  <div>
                    <h2>{experiences[selectedCompany].company}</h2>
                    <h3>{experiences[selectedCompany].position}</h3>
                  </div>
                  <div className="experience-meta">
                    <span className="location">{experiences[selectedCompany].location}</span>
                    <span className="period">{experiences[selectedCompany].period}</span>
                  </div>
                </div>
                
                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {experiences[selectedCompany].achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="card summary-card">
          <h2>Career Summary</h2>
          <p>
            With over seven years of experience, I have developed a strong foundation in 
            full-stack development and Salesforce platforms. My work focuses on creating 
            scalable solutions, optimizing performance, and improving user experiences. 
            I'm now expanding into modern React development to enhance my front-end 
            capabilities and contribute to innovative, AI-enabled projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;

