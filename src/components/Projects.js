import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: 'This Portfolio Website',
      description: 'Interactive portfolio website demonstrating React skills and concepts',
      technologies: ['React', 'React Router', 'React Hooks', 'JSX', 'CSS'],
      achievements: [
        'Component-based architecture',
        'State management with React Hooks',
        'Routing implementation',
        'Responsive design',
        'Interactive user experience'
      ],
      featured: true
    },
    {
      title: 'Winnabego CRM Modernization',
      description: 'Migrated Winnabego\'s operations to Salesforce, unifying dealer and warranty processes',
      technologies: ['Salesforce', 'LWC', 'Apex', 'Sales Cloud', 'Service Cloud'],
      achievements: [
        'Automated workflows and integrated with SAP',
        'Enhanced transparency and sales productivity',
        'Reduced warranty time'
      ]
    },
    {
      title: 'ARM - Salesforce Transformation',
      description: 'Transformed Salesforce into a scalable platform supporting global sales and service teams',
      technologies: ['Salesforce', 'LWC', 'Apex', 'Automation'],
      achievements: [
        'Unified processes and reliable integrations',
        'Supported global teams with automation',
        'Scalable platform architecture'
      ]
    },
    {
      title: 'GECAS - Web Platform Enhancement',
      description: 'Guided scalable web app development with front-end optimization and automation',
      technologies: ['JavaScript', 'ASP.NET MVC', 'MySQL', 'Testing'],
      achievements: [
        'Front-end optimization',
        'Automated testing setup',
        'MySQL migration',
        'Internal tool creation for modernization'
      ]
    }
  ];

  return (
    <div className="projects-page">
      <div className="container">
        <div className="page-header">
          <h1>Projects & Portfolio</h1>
          <p>Real-world applications and solutions</p>
        </div>

        <div className="projects-showcase">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`card project-card ${selectedProject === index ? 'active' : ''} ${project.featured ? 'featured' : ''}`}
              onClick={() => setSelectedProject(index)}
            >
              {project.featured && (
                <div className="featured-badge">Current Project</div>
              )}
              <h2>{project.title}</h2>
              <p className="project-description">{project.description}</p>
              
              <div className="technologies">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {selectedProject === index && (
                <div className="project-details">
                  <h4>Achievements:</h4>
                  <ul>
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="card react-concepts-card">
          <h2>React Concepts Demonstrated in This Portfolio</h2>
          <div className="concepts-grid">
            <div className="concept-item">
              <h3>Component-Based Architecture</h3>
              <p>Built reusable, modular components for navigation, pages, and UI elements</p>
            </div>
            <div className="concept-item">
              <h3>JSX</h3>
              <p>Used JSX syntax throughout for declarative UI rendering</p>
            </div>
            <div className="concept-item">
              <h3>React Hooks</h3>
              <p>Implemented useState and useEffect for state management and side effects</p>
            </div>
            <div className="concept-item">
              <h3>State Management</h3>
              <p>Managed component state for interactive features like tabs, filters, and expansions</p>
            </div>
            <div className="concept-item">
              <h3>Routing</h3>
              <p>Implemented React Router for multi-page navigation and routing</p>
            </div>
            <div className="concept-item">
              <h3>Component Styling</h3>
              <p>Styled components with CSS modules and responsive design principles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

