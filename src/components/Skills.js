import React from 'react';
import './Skills.css';

function Skills() {
  const skillsData = {
    '🎨 Front-End Development': [
      'React', 'JavaScript', 'HTML', 'CSS', 'JSX'
    ],
    '⚙️ Back-End Development': [
      'C#', 'ASP.NET MVC', 'Python', 'Java'
    ],
    '☁️ Salesforce': [
      'LWC', 'Apex', 'Sales Cloud', 'Service Cloud', 'Automotive', 'CPQ', 'FSC'
    ],
    '💾 Databases': [
      'PL/SQL', 'SOQL', 'SOSL', 'MySQL'
    ],
    '🛠️ Tools & Platforms': [
      'VS Code', 'Azure DevOps', 'Git', 'JIRA', 'Agile Methodologies', 'Code Reviews', 'Technical Documentation'
    ]
  };

  return (
    <div className="skills-page">
      <div className="container">
        <div className="page-header">
          <h1>Technical Skills</h1>
          <p>Technologies and tools I work with</p>
        </div>

        <div className="skills-sections">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="card skill-category-card">
              <h2 className="category-title">{category}</h2>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
