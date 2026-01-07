import React, { useState } from 'react';
import './Skills.css';

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skillsData = {
    'Front-End Development': [
      { name: 'React', level: 75 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JSX', level: 75 }
    ],
    'Back-End Development': [
      { name: 'C#', level: 80 },
      { name: 'ASP.NET MVC', level: 80 },
      { name: 'Python', level: 70 },
      { name: 'Java', level: 70 }
    ],
    'Salesforce': [
      { name: 'LWC', level: 85 },
      { name: 'Apex', level: 85 },
      { name: 'Sales Cloud', level: 80 },
      { name: 'Service Cloud', level: 80 },
      { name: 'Automotive', level: 75 },
      { name: 'CPQ', level: 75 },
      { name: 'FSC', level: 70 }
    ],
    'Databases': [
      { name: 'PL/SQL', level: 85 },
      { name: 'SOQL', level: 85 },
      { name: 'SOSL', level: 80 },
      { name: 'MySQL', level: 75 }
    ],
    'Tools & Others': [
      { name: 'VS Code', level: 90 },
      { name: 'Azure DevOps', level: 75 },
      { name: 'Git', level: 80 },
      { name: 'JIRA', level: 80 },
      { name: 'Agile Methodologies', level: 85 },
      { name: 'Code Reviews', level: 85 },
      { name: 'Technical Documentation', level: 85 }
    ]
  };

  const categories = Object.keys(skillsData);

  const getFilteredSkills = () => {
    if (selectedCategory === 'all') {
      return Object.entries(skillsData).flatMap(([category, skills]) =>
        skills.map(skill => ({ ...skill, category }))
      );
    }
    return skillsData[selectedCategory].map(skill => ({
      ...skill,
      category: selectedCategory
    }));
  };

  return (
    <div className="skills-page">
      <div className="container">
        <div className="page-header">
          <h1>Technical Skills</h1>
          <p>Technologies and tools I work with</p>
        </div>

        <div className="skills-container">
          <div className="category-filter">
            <button
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Skills
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="skills-grid">
            {getFilteredSkills().map((skill, index) => (
              <div key={`${skill.category}-${skill.name}-${index}`} className="skill-card">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                {selectedCategory === 'all' && (
                  <span className="skill-category">{skill.category}</span>
                )}
              </div>
            ))}
          </div>
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
      </div>
    </div>
  );
}

export default Skills;

