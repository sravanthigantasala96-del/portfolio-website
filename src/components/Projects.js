import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: 'This Portfolio Website',
      role: 'Personal Project',
      description: 'Interactive portfolio website demonstrating React skills and concepts',
      technologies: ['React', 'React Router', 'React Hooks', 'JSX', 'CSS', 'Git', 'GitHub Pages'],
      achievements: [
        'Built a multi-page application with component-based architecture and state management using React Hooks',
        'Implemented React Router for navigation and created responsive layouts with CSS Grid and Flexbox',
        'Deployed to GitHub Pages with proper routing configuration and custom 404 handling for SPA compatibility'
      ],
      featured: true
    },
    {
      title: 'Memory Game',
      role: 'Student/Learner - ReDI School Team Project',
      description: 'React-based memory card game developed collaboratively in a small team at ReDI School of Integration, Denmark. Applied core React concepts by breaking the application into reusable components in a real team environment.',
      technologies: ['React', 'React Router', 'React Hooks', 'JavaScript', 'JSX', 'CSS3', 'Flexbox', 'Git', 'GitHub Pages'],
      achievements: [
        'Structured reusable components and implemented state management for user interactions and card matching logic',
        'Collaborated with teammates on code reviews, task management (Trello), documentation (Gamma), and version control (Git)',
        'Deployed the application via GitHub Pages and practiced component-based design in a real team environment'
      ],
      demoLink: {
        url: 'https://sravanthigantasala96-del.github.io/memory-game-react',
        label: 'View Live Demo'
      }
    },
    {
      title: 'Winnebago CRM Modernization',
      role: 'IT Analyst (Salesforce Developer) - Tata Consultancy Services',
      description: 'Migrated Winnebago\'s operations to Salesforce, unifying dealer and warranty processes',
      technologies: ['Salesforce', 'LWC', 'Apex', 'Sales Cloud', 'Service Cloud', 'Agentforce (prev. Salesforce Einstein (AI))'],
      achievements: [
        'Automated workflows and integrated with SAP',
        'Enhanced transparency and sales productivity',
        'Reduced warranty time'
      ]
    },
    {
      title: 'ARM - Salesforce Transformation',
      role: 'IT Analyst (Salesforce Developer) - Tata Consultancy Services',
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
      role: '.NET Developer/Associate Consultant - Capgemini',
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
                <div className="featured-badge">Latest Project</div>
              )}
              <h2>{project.title}</h2>
              {project.role && (
                <p className="project-role">{project.role}</p>
              )}
              <p className="project-description">{project.description}</p>
              
              <div className="technologies">
                <h4>Tech Stack:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {selectedProject === index && (
                <div className="project-details">
                  <h4>✨ Achievements:</h4>
                  <ul>
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                  {project.demoLink && project.demoLink.url && (
                    <div className="project-link">
                      <a 
                        href={project.demoLink.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="demo-link"
                      >
                        {project.demoLink.label}
                      </a>
                      {project.demoLink.note && (
                        <span className="link-note"> ({project.demoLink.note})</span>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="card react-concepts-card">
          <h2>⚛️ React Concepts Demonstrated in This Portfolio</h2>
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

