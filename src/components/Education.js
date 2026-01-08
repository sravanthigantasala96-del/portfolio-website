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
        'Big Data Analytics',
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
    <div className="min-h-[calc(100vh-80px)] py-8">
      <div className="container">
        <div className="page-header">
          <h1>Education & Learning</h1>
          <p>Continuous growth in technology and development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {education.map((item) => (
            <div 
              key={item.id} 
              className={`card transition-all duration-300 cursor-pointer relative ${
                expandedCard === item.id ? 'shadow-2xl' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-4 pb-4 border-b-2 border-[#f0f0f0] gap-6 cursor-pointer" onClick={() => toggleCard(item.id)}>
                <div className="flex-1">
                  <h2 className="text-danske-blue text-2xl mb-2 font-semibold">{item.degree || item.course}</h2>
                  <h3 className="text-[#333] text-lg font-medium mb-1">{item.institution}</h3>
                  {item.location && <p className="text-[#666] text-sm">📍 {item.location}</p>}
                </div>
                <button className="bg-danske-blue text-white border-none w-9 h-9 rounded-full text-2xl cursor-pointer flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-auto hover:bg-danske-blue-light hover:scale-110" aria-label="Expand details">
                  {expandedCard === item.id ? '−' : '+'}
                </button>
              </div>
              
              <div className="mb-4">
                <span className="text-danske-blue font-semibold text-[0.95rem]">{item.period}</span>
              </div>

              <p className="text-[#555] leading-relaxed mb-4">{item.description}</p>

              {item.highlights && (
                <div className={`highlights-transition ${expandedCard === item.id ? 'show' : ''}`}>
                  <h4 className="text-[#333] mb-4 text-lg">📚 Key Topics Covered:</h4>
                  <ul className="list-none p-0">
                    {item.highlights.map((highlight, index) => (
                      <li key={index} className="p-3 mb-2 bg-danske-gray border-l-[3px] border-danske-blue rounded transition-transform duration-300 text-[#333] hover:translate-x-1">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.details && expandedCard === item.id && (
                <div className="mt-4 pt-4 border-t-2 border-[#f0f0f0] animate-fade-in">
                  <p className="text-[#555] leading-relaxed italic">{item.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="card certifications-gradient bg-gradient-to-b from-white to-danske-gray border-danske-gray-light relative overflow-hidden">
          <h2 className="text-danske-blue mb-8 text-3xl font-semibold">🏆 Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-b from-white to-danske-gray p-6 rounded-lg border-l-4 border-danske-blue flex justify-between items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-[#333] text-base font-semibold flex-1">Salesforce Certified AI Associate</h3>
              <span className="bg-danske-blue text-white px-4 py-2 rounded-full font-semibold text-sm ml-4">2025</span>
            </div>
            <div className="bg-gradient-to-b from-white to-danske-gray p-6 rounded-lg border-l-4 border-danske-blue flex justify-between items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-[#333] text-base font-semibold flex-1">Salesforce Certified CPQ Specialist</h3>
              <span className="bg-danske-blue text-white px-4 py-2 rounded-full font-semibold text-sm ml-4">2024</span>
            </div>
            <div className="bg-gradient-to-b from-white to-danske-gray p-6 rounded-lg border-l-4 border-danske-blue flex justify-between items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-[#333] text-base font-semibold flex-1">Salesforce Certified Platform Developer I</h3>
              <span className="bg-danske-blue text-white px-4 py-2 rounded-full font-semibold text-sm ml-4">2022</span>
            </div>
            <div className="bg-gradient-to-b from-white to-danske-gray p-6 rounded-lg border-l-4 border-danske-blue flex justify-between items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-[#333] text-base font-semibold flex-1">Salesforce Certified Administrator</h3>
              <span className="bg-danske-blue text-white px-4 py-2 rounded-full font-semibold text-sm ml-4">2021</span>
            </div>
            <div className="bg-gradient-to-b from-white to-danske-gray p-6 rounded-lg border-l-4 border-danske-blue flex justify-between items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-[#333] text-base font-semibold flex-1">Capgemini Certified .NET Developer</h3>
              <span className="bg-danske-blue text-white px-4 py-2 rounded-full font-semibold text-sm ml-4">2017</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
