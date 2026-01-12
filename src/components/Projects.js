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
        'Built a single-page application (SPA) with component-based architecture and state management using React Hooks',
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
    <div className="min-h-[calc(100vh-80px)] py-8">
      <div className="container">
        <div className="page-header">
          <h1>Projects & Portfolio</h1>
          <p>Real-world applications and solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`card relative cursor-pointer transition-all duration-300 overflow-hidden hover:-translate-y-1 ${
                selectedProject === index ? 'shadow-lg border-danske-blue' : ''
              } ${project.featured ? 'border-2 border-danske-blue bg-danske-gray' : ''}`}
              onClick={() => setSelectedProject(index)}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 bg-danske-blue text-white px-4 py-2 rounded-full text-sm font-semibold z-10 whitespace-nowrap">
                  Latest Project
                </div>
              )}
              <h2 className={`text-danske-blue text-2xl mb-4 font-semibold ${project.featured ? 'pr-36' : ''}`}>
                {project.title}
              </h2>
              {project.role && (
                <p className="text-danske-blue text-sm font-semibold mb-2 italic">{project.role}</p>
              )}
              <p className="text-[#555] leading-relaxed mb-6">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-[#333] text-sm mb-3 uppercase tracking-wider">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-danske-blue text-white px-3 py-1.5 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject === index && (
                <div className="mt-6 pt-6 border-t-2 border-[#f0f0f0] animate-fade-in">
                  <h4 className="text-[#333] mb-4 text-lg">✨ Achievements:</h4>
                  <ul className="list-none p-0">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="p-3 mb-2 bg-danske-gray border-l-[3px] border-danske-blue rounded text-[#333] leading-relaxed">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  {project.demoLink && project.demoLink.url && (
                    <div className="mt-6 pt-6 border-t-2 border-[#f0f0f0]">
                      <a 
                        href={project.demoLink.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-danske-blue no-underline font-semibold text-base transition-colors duration-300 inline-block hover:text-danske-blue-light hover:underline"
                      >
                        {project.demoLink.label} →
                      </a>
                      {project.demoLink.note && (
                        <span className="text-[#666] text-sm italic ml-2">({project.demoLink.note})</span>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="card react-concepts-gradient bg-gradient-to-b from-white to-danske-gray border-danske-gray-light mt-8 relative overflow-hidden">
          <h2 className="text-danske-blue mb-8 text-3xl text-center font-semibold">⚛️ React Concepts Demonstrated in This Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-b from-white to-danske-gray p-6 rounded-lg border-t-4 border-danske-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-danske-blue text-xl mb-3 font-semibold">Component-Based Architecture</h3>
              <p className="text-[#555] leading-relaxed text-base">Built reusable, modular components for navigation, pages, and UI elements</p>
            </div>
            <div className="bg-gradient-to-b from-white to-danske-gray p-6 rounded-lg border-t-4 border-danske-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-danske-blue text-xl mb-3 font-semibold">JSX</h3>
              <p className="text-[#555] leading-relaxed text-base">Used JSX syntax throughout for declarative UI rendering</p>
            </div>
            <div className="bg-gradient-to-b from-white to-danske-gray p-6 rounded-lg border-t-4 border-danske-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-danske-blue text-xl mb-3 font-semibold">React Hooks</h3>
              <p className="text-[#555] leading-relaxed text-base">Implemented useState and useEffect for state management and side effects</p>
            </div>
            <div className="bg-gradient-to-b from-white to-danske-gray p-6 rounded-lg border-t-4 border-danske-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-danske-blue text-xl mb-3 font-semibold">State Management</h3>
              <p className="text-[#555] leading-relaxed text-base">Managed component state for interactive features like tabs, filters, and expansions</p>
            </div>
            <div className="bg-gradient-to-b from-white to-danske-gray p-6 rounded-lg border-t-4 border-danske-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-danske-blue text-xl mb-3 font-semibold">Routing</h3>
              <p className="text-[#555] leading-relaxed text-base">Implemented React Router for client-side routing in a single-page application (SPA)</p>
            </div>
            <div className="bg-gradient-to-b from-white to-danske-gray p-6 rounded-lg border-t-4 border-danske-blue transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-danske-blue text-xl mb-3 font-semibold">Component Styling</h3>
              <p className="text-[#555] leading-relaxed text-base">Styled components with CSS modules and responsive design principles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
