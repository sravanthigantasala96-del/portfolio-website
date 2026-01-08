import React from 'react';

function Skills() {
  const skillsData = {
    '🎨 Front-End Development': [
      'React', 'JavaScript', 'HTML', 'CSS', 'JSX', 'Responsive Design', 'UI/UX Principles'
    ],
    '⚙️ Back-End Development': [
      'C#', 'ASP.NET MVC', 'Python', 'Java', 'RESTful APIs', 'SQL'
    ],
    '☁️ Salesforce': [
      'LWC', 'Apex', 'Sales Cloud', 'Service Cloud', 'Automotive Cloud', 'CPQ', 'FSC', 'Flows', 'Integrations'
    ],
    '💾 Databases': [
      'PL/SQL', 'SOQL', 'SOSL', 'MySQL', 'Database Design'
    ],
    '🛠️ Tools & Platforms': [
      'VS Code', 'Azure DevOps', 'Git', 'GitHub', 'JIRA', 'Trello', 'Gamma', 'Postman', 'Workbench'
    ],
    'Methodologies & Practices': [
      'Agile Methodologies', 'Scrum', 'CI/CD', 'DevOps Principles', 'Code Reviews', 'Technical Documentation', 'Problem Solving'
    ]
  };

  return (
    <div className="min-h-[calc(100vh-80px)] py-8">
      <div className="container">
        <div className="page-header">
          <h1>Technical Skills</h1>
          <p>Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="card">
              <h2 className="text-danske-blue text-2xl mb-6 font-semibold pb-4 border-b-2 border-[#f0f0f0]">
                {category === 'Methodologies & Practices' && '💡 '}
                {category}
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span key={index} className="inline-block px-5 py-2.5 bg-danske-gray text-[#333] border border-danske-gray-light rounded-full text-base font-medium transition-all duration-300 hover:bg-danske-blue hover:text-white hover:border-danske-blue hover:-translate-y-0.5 hover:shadow-md">
                    {skill}
                  </span>
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
