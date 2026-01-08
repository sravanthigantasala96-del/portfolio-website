import React from 'react';
import './About.css';
import profilePhoto from '../images/SaiG_PP.jpeg';

function About() {
  const contactInfo = {
    email: 'sravanthigantasala.96@gmail.com',
    phone: '(+45)-917959898',
    location: 'Aarhus/Copenhagen, Denmark',
    linkedin: 'linkedin.com/in/sravanthigantasala'
  };

  return (
    <div className="min-h-[calc(100vh-80px)] py-8">
      <div className="container">
        <div className="page-header">
          <h1>Get to Know Me</h1>
          <p>Full Stack & Salesforce Developer | AI Enthusiast</p>
        </div>

        <div className="about-grid grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          {/* Profile card - spans 2 rows */}
          <div className="card px-6 py-6">
            <div className="flex justify-center mb-6 pt-0">
              <img src={profilePhoto} alt="Sai Sravanthi G" className="w-[280px] h-[280px] md:w-[280px] md:h-[280px] rounded-xl object-cover border-4 border-danske-gray-light shadow-lg transition-transform duration-300 hover:scale-105" />
            </div>

            <div className="animate-fade-in">
              <p className="text-lg leading-relaxed mb-6 text-[#333] font-medium">
                I am an experienced Full-Stack and Salesforce Developer with about seven years of 
                experience delivering scalable, user-focused solutions. My journey began in full-stack 
                development and evolved into a Salesforce-focused career where I've built, optimized and 
                integrated solutions across different industries.
              </p>
              <p className="leading-relaxed text-[#555] mb-4">
                I specialize in Apex, Lightning Web Components (LWC), Flows, and system integrations using 
                REST/SOAP APIs. I'm passionate about simplifying complexity, whether through modular architecture, 
                declarative automation, or mentoring teammates on best practices. I also bring a strong foundation 
                in CI/CD, Agile methodologies, and DevOps practices. I'm expanding my capabilities in modern 
                front-end engineering, workflow automation, and AI-driven development, currently learning React 
                with a focus on component-based architecture and building responsive, user-centric interfaces.
              </p>
              <p className="leading-relaxed text-[#555] mb-0">
                What sets me apart is my ability to bridge the gap between technical teams and business stakeholders. 
                I believe great software is not just about clean code - it's about understanding the people who use it. 
                With strong problem-solving skills and a proactive mindset, I thrive in collaborative, cross-functional 
                environments and enjoy turning business needs into practical, maintainable solutions. I'm motivated by 
                the chance to build intuitive interfaces that support intelligent, scalable, 'build once – use many times' 
                solutions and to contribute my technical foundation, curiosity, and growing front-end expertise to innovative 
                workflow and AI-enabled projects.
              </p>
            </div>      
          </div>

          {/* Goals card */}
          <div className="card goals-gradient bg-gradient-to-b from-white to-danske-gray border-danske-gray-light relative overflow-hidden">
            <h2 className="text-danske-blue mb-6 text-3xl font-semibold">My Goals</h2>
            <ul className="list-none p-0">
              <li className="p-4 mb-4 bg-danske-gray rounded-lg border-l-4 border-danske-blue leading-relaxed text-[#333] transition-transform duration-300 hover:translate-x-1">
                Build intuitive interfaces that support intelligent, scalable, 'build once – use many times' solutions
              </li>
              <li className="p-4 mb-4 bg-danske-gray rounded-lg border-l-4 border-danske-blue leading-relaxed text-[#333] transition-transform duration-300 hover:translate-x-1">
                Bridge the gap between technical teams and business stakeholders in collaborative, cross-functional environments
              </li>
              <li className="p-4 mb-4 bg-danske-gray rounded-lg border-l-4 border-danske-blue leading-relaxed text-[#333] transition-transform duration-300 hover:translate-x-1">
                Apply AI and automation to improve development workflows and system efficiency
              </li>
              <li className="p-4 mb-0 bg-danske-gray rounded-lg border-l-4 border-danske-blue leading-relaxed text-[#333] transition-transform duration-300 hover:translate-x-1">
                Continue building my career in Denmark, bringing together enterprise platform experience, front-end development, and workflow-oriented thinking
              </li>
            </ul>
          </div>

          {/* Languages card */}
          <div className="card languages-gradient bg-gradient-to-b from-white to-danske-gray border-danske-gray-light relative overflow-hidden">
            <h2 className="text-danske-blue mb-6 text-3xl font-semibold">Languages</h2>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center p-4 bg-gradient-to-b from-white to-danske-gray rounded-lg border-l-4 border-danske-blue transition-transform duration-300 hover:translate-x-1">
                <span className="font-semibold text-[#333] text-lg">English</span>
                <span className="text-danske-blue font-semibold px-4 py-1 bg-danske-gray rounded-full text-sm">Proficient</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-b from-white to-danske-gray rounded-lg border-l-4 border-danske-blue transition-transform duration-300 hover:translate-x-1">
                <span className="font-semibold text-[#333] text-lg">Telugu</span>
                <span className="text-danske-blue font-semibold px-4 py-1 bg-danske-gray rounded-full text-sm">Native</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-b from-white to-danske-gray rounded-lg border-l-4 border-danske-blue transition-transform duration-300 hover:translate-x-1">
                <span className="font-semibold text-[#333] text-lg">Danish</span>
                <span className="text-danske-blue font-semibold px-4 py-1 bg-danske-gray rounded-full text-sm">Intermediate</span>
              </div>
            </div>
          </div>

          {/* Personal card */}
          <div className="card personal-gradient bg-gradient-to-b from-white to-danske-gray border-danske-gray-light relative overflow-hidden">
            <h2 className="text-danske-blue mb-6 text-3xl font-semibold">Beyond Work</h2>
            <div className="flex flex-col gap-6">
              <p className="p-4 bg-gradient-to-r from-[#e6f0ff] to-[#d0e4ff] rounded-lg border-l-4 border-danske-blue text-danske-blue font-semibold text-base m-0 shadow-sm">
                💑 Happily Married Since 2018
              </p>
              <div className="flex flex-col gap-4 pt-4 border-t border-danske-gray-light">
                <h4 className="text-danske-blue text-sm font-semibold m-0 uppercase tracking-wider">Hobbies & Interests</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-block px-5 py-2.5 bg-white text-[#333] border border-danske-gray-light rounded-full text-base font-medium transition-all duration-300 hover:bg-danske-blue hover:text-white hover:border-danske-blue hover:-translate-y-0.5 hover:shadow-md">
                    🍳 Cooking
                  </span>
                  <span className="inline-block px-5 py-2.5 bg-white text-[#333] border border-danske-gray-light rounded-full text-base font-medium transition-all duration-300 hover:bg-danske-blue hover:text-white hover:border-danske-blue hover:-translate-y-0.5 hover:shadow-md">
                    💪 Fitness
                  </span>
                  <span className="inline-block px-5 py-2.5 bg-white text-[#333] border border-danske-gray-light rounded-full text-base font-medium transition-all duration-300 hover:bg-danske-blue hover:text-white hover:border-danske-blue hover:-translate-y-0.5 hover:shadow-md">
                    📚 Reading
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 pt-4 border-t border-danske-gray-light">
                <h4 className="text-danske-blue text-sm font-semibold m-0 uppercase tracking-wider">Free Time Activities</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-block px-5 py-2.5 bg-white text-[#333] border border-danske-gray-light rounded-full text-base font-medium transition-all duration-300 hover:bg-danske-blue hover:text-white hover:border-danske-blue hover:-translate-y-0.5 hover:shadow-md">
                    🏸 Badminton
                  </span>
                  <span className="inline-block px-5 py-2.5 bg-white text-[#333] border border-danske-gray-light rounded-full text-base font-medium transition-all duration-300 hover:bg-danske-blue hover:text-white hover:border-danske-blue hover:-translate-y-0.5 hover:shadow-md">
                    💃 Dancing
                  </span>
                  <span className="inline-block px-5 py-2.5 bg-white text-[#333] border border-danske-gray-light rounded-full text-base font-medium transition-all duration-300 hover:bg-danske-blue hover:text-white hover:border-danske-blue hover:-translate-y-0.5 hover:shadow-md">
                    ✈️ Travelling
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact card */}
          <div className="card contact-gradient bg-gradient-to-b from-white to-danske-gray border-danske-gray-light relative overflow-hidden">
            <h2 className="text-danske-blue mb-6 text-3xl font-semibold">Contact</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 pb-6 border-b border-[#f0f0f0] last:border-b-0 last:pb-0">
                <span className="font-semibold text-danske-blue text-sm uppercase tracking-wider">📧 Email:</span>
                <a href={`mailto:${contactInfo.email}`} className="text-[#333] no-underline text-lg transition-colors duration-300 hover:text-danske-blue">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex flex-col gap-2 pb-6 border-b border-[#f0f0f0] last:border-b-0 last:pb-0">
                <span className="font-semibold text-danske-blue text-sm uppercase tracking-wider">📱 Phone:</span>
                <a href={`tel:${contactInfo.phone}`} className="text-[#333] no-underline text-lg transition-colors duration-300 hover:text-danske-blue">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex flex-col gap-2 pb-6 border-b border-[#f0f0f0] last:border-b-0 last:pb-0">
                <span className="font-semibold text-danske-blue text-sm uppercase tracking-wider">📍 Location:</span>
                <span className="text-[#333] text-lg">{contactInfo.location}</span>
              </div>
              <div className="flex flex-col gap-2 pb-0">
                <span className="font-semibold text-danske-blue text-sm uppercase tracking-wider">💼 LinkedIn:</span>
                <a 
                  href={`https://www.${contactInfo.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#333] no-underline text-lg transition-colors duration-300 hover:text-danske-blue"
                >
                  {contactInfo.linkedin}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
