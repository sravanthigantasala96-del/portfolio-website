import React, { useState } from 'react';
import './Experience.css';

function Experience() {
  const [selectedCompany, setSelectedCompany] = useState(0);

  const experiences = [
    {
      company: 'Tata Consultancy Services',
      position: 'IT Analyst (Salesforce Developer)',
      location: 'Hyderabad, IN',
      period: 'July 2022 - October 2024',
      achievements: [
        'Increased sales efficiency by 23% through the implementation of automated workflows, process improvements and other advanced features',
        'Boosted process efficiency by 20% and reduced operational costs by 12% by implementing complex Salesforce configurations and customizations',
        'Decreased lead conversion time by 50%, from 48 to 24 hours, and increased customer satisfaction by 9% by enhancing Sales and Service Cloud features',
        'Designed and implemented complex Salesforce integrations with ERP systems and other platforms using REST/SOAP APIs and middleware',
        'Designed and maintained reusable LWC and Apex classes for consistent and maintainable codebases. Resulted in a 36% improvement in page loading speed and a 20% increase in user satisfaction',
        'Reduced long-term maintenance overhead by introducing scalable design patterns, cleaning up redundant metadata and optimizing database queries'
      ]
    },
    {
      company: 'Capgemini',
      position: '.NET Developer/Associate Consultant',
      location: 'Hyderabad, IN',
      period: 'August 2017 - June 2022',
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
    <div className="min-h-[calc(100vh-80px)] py-8">
      <div className="container">
        <div className="page-header">
          <h1>Professional Experience</h1>
          <p>7+ years of delivering scalable solutions across industries</p>
        </div>

        <div className="card bg-danske-gray border-danske-gray-light mt-8">
          <h2 className="text-danske-blue mb-4 text-3xl">💼 Career Summary</h2>
          <p className="leading-relaxed text-[#555] text-lg">
            Over seven years building enterprise platforms and scalable solutions, with experience spanning 
            full-stack development at Capgemini and Salesforce development at TCS. Currently building my 
            career in Denmark, focusing on front-end development, automation, and scalable solutions.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex gap-4 mb-8 flex-wrap">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`px-8 py-4 border-2 rounded-lg cursor-pointer font-semibold text-base transition-all duration-300 flex-1 min-w-[200px] ${
                  selectedCompany === index
                    ? 'bg-danske-blue text-white border-danske-blue shadow-lg'
                    : 'bg-white text-danske-blue border-danske-blue hover:bg-danske-gray hover:shadow-md'
                }`}
                onClick={() => setSelectedCompany(index)}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div className="animate-fade-in">
            {experiences[selectedCompany] && (
              <div className="card animate-fade-in-up">
                <div className="border-b-2 border-[#f0f0f0] pb-6 mb-8 flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h2 className="text-danske-blue text-3xl mb-2 font-semibold">{experiences[selectedCompany].company}</h2>
                    <h3 className="text-[#333] text-xl font-medium">{experiences[selectedCompany].position}</h3>
                  </div>
                  <div className="flex flex-col items-end gap-2 md:items-end items-start">
                    <span className="text-[#666] text-[0.95rem]">📍 {experiences[selectedCompany].location}</span>
                    <span className="text-danske-blue font-semibold text-[0.95rem]">📅 {experiences[selectedCompany].period}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-[#333] text-xl mb-6 pb-2 border-b-2 border-danske-blue inline-block">✨ Key Achievements:</h4>
                  <ul className="list-none p-0">
                    {experiences[selectedCompany].achievements.map((achievement, index) => (
                      <li key={index} className="achievement-item p-4 mb-4 bg-danske-gray border-l-4 border-danske-blue rounded-lg leading-relaxed text-[#333] relative pl-8 transition-all duration-300 hover:translate-x-1 hover:shadow-md hover:bg-[#eef2f8]">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
