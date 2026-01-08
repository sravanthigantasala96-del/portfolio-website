import React, { useState } from 'react';
import './Education.css';

function Education() {
  const [expandedCard, setExpandedCard] = useState(null);

  const education = [
    {
      id: 1,
      course: 'Front-End Development with React',
      institution: 'ReDI School of Digital Integration',
      location: 'Denmark',
      period: 'September - December 2025',
      description: '12-week course focusing on JavaScript and React fundamentals',
      highlights: [
        'JS frameworks and JSX',
        'React components and styling',
        'State management',
        'Routing',
        'React Hooks',
        'Memory Game case project using JavaScript and React'
      ],
      details: 'Assignments, self-study, and project work. Equivalent to intermediate level JavaScript development. Gained exposure to the Danish tech ecosystem and work culture through collaborative project work and networking opportunities.'
    },
    {
      id: 2,
      degree: 'Post Graduate Diploma in ML/AI',
      institution: 'International Institute of Information Technology Bangalore',
      location: 'India',
      period: 'June 2021 - December 2022',
      description: 'Specialized program in Machine Learning and Artificial Intelligence',
      highlights: [
        'Neural Networks and Deep Learning',
        'Supervised and Unsupervised Learning',
        'Regression and Classification Algorithms',
        'Natural Language Processing (NLP)',
        'Computer Vision',
        'Python Programming for Data Science',
        'Mathematics and Statistics for AI/ML',
        'Model Deployment Workflows',
        'TensorFlow and PyTorch Frameworks',
        'Clustering and Dimensionality Reduction'
      ]
    },
    {
      id: 3,
      degree: 'Bachelor of Technology in Computer Science Engineering',
      institution: 'Jawaharlal Nehru Technological University, Kakinada',
      location: 'India',
      period: 'September 2013 - July 2017',
      description: 'Comprehensive computer science and engineering program',
      highlights: [
        'Data Structures and Algorithms',
        'Programming Languages (C, Java, Python)',
        'Database Management Systems',
        'Operating Systems',
        'Computer Networks',
        'Computer Organization and Architecture',
        'Software Engineering',
        'Web Technologies',
        'Object-Oriented Programming',
        'Software Testing and Quality Assurance',
        'Project Management and Capstone Projects'
      ]
    }
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="education-page">
      <div className="container">
        <div className="page-header">
          <h1>Education & Learning</h1>
          <p>Continuous growth in technology and development</p>
        </div>

        <div className="education-grid">
          {education.map((item) => (
            <div 
              key={item.id} 
              className={`card education-card ${expandedCard === item.id ? 'expanded' : ''}`}
            >
              <div className="education-header" onClick={() => toggleCard(item.id)}>
                <div>
                  <h2>{item.degree || item.course}</h2>
                  <h3>{item.institution}</h3>
                  {item.location && <p className="location">📍 {item.location}</p>}
                </div>
                <button className="expand-btn" aria-label="Expand details">
                  {expandedCard === item.id ? '−' : '+'}
                </button>
              </div>
              
              <div className="education-meta">
                <span className="period">{item.period}</span>
              </div>

              <p className="education-description">{item.description}</p>

              {item.highlights && (
                <div className={`highlights-section ${expandedCard === item.id ? 'show' : ''}`}>
                  <h4>📚 Key Topics Covered:</h4>
                  <ul>
                    {item.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}

              {item.details && expandedCard === item.id && (
                <div className="details-section">
                  <p>{item.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="card certifications-card">
          <h2>🏆 Certifications</h2>
          <div className="certifications-grid">
            <div className="cert-item">
              <h3>Salesforce Certified AI Associate</h3>
              <span className="year">2025</span>
            </div>
            <div className="cert-item">
              <h3>Salesforce Certified CPQ Specialist</h3>
              <span className="year">2024</span>
            </div>
            <div className="cert-item">
              <h3>Salesforce Certified Platform Developer I</h3>
              <span className="year">2022</span>
            </div>
            <div className="cert-item">
              <h3>Salesforce Certified Administrator</h3>
              <span className="year">2021</span>
            </div>
            <div className="cert-item">
              <h3>Capgemini Certified .NET Developer</h3>
              <span className="year">2017</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

