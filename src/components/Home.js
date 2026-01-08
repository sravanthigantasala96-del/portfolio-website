import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'Full Stack Developer',
    'Salesforce Developer',
    'AI Enthusiast',
    'React Learner'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [roles.length]);

  const getArticle = (role) => {
    // Check if role starts with a vowel sound
    const vowelSounds = ['a', 'e', 'i', 'o', 'u'];
    const firstLetter = role.charAt(0).toLowerCase();
    return vowelSounds.includes(firstLetter) ? 'an' : 'a';
  };

  return (
    <div className="min-h-[calc(100vh-80px)]">
      <div className="max-w-container mx-auto px-8 py-16 grid md:grid-cols-2 grid-cols-1 gap-16 items-center bg-white rounded-lg my-8 shadow-sm border border-danske-gray-light">
        <div className="animate-fade-in-left">
          <h1 className="text-5xl md:text-5xl text-danske-text mb-6 leading-tight font-semibold tracking-tight">
            Hi, I'm <span className="text-danske-blue">Sai Sravanthi G</span>
          </h1>
          <div className="text-2xl text-danske-text-light mb-6 min-h-[60px] font-normal">
            <span className="mr-2">I'm {getArticle(roles[currentRole])}</span>
            <span className="text-danske-blue font-semibold animate-fade-in" key={currentRole}>
              {roles[currentRole]}
            </span>
          </div>
          <p className="text-lg text-danske-text-light leading-relaxed mb-8 font-normal">
            Experienced developer with 7+ years in Full-Stack and Salesforce development,
            currently expanding expertise in modern React development and AI-driven solutions.
          </p>
          <div className="flex gap-4 flex-wrap md:flex-nowrap">
            <Link to="/about" className="px-8 py-4 rounded-lg no-underline font-semibold transition-all duration-300 inline-block border-2 border-transparent bg-danske-blue text-white border-danske-blue hover:bg-danske-blue-light hover:border-danske-blue-light hover:shadow-lg">
              Learn More About Me
            </Link>
            <Link to="/projects" className="px-8 py-4 rounded-lg no-underline font-semibold transition-all duration-300 inline-block border-2 border-danske-blue bg-transparent text-danske-blue hover:bg-danske-blue hover:text-white hover:shadow-lg text-center">
              View My Work
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-right">
          <div className="stat-card-gradient bg-gradient-to-b from-white to-danske-gray p-8 rounded-lg text-center shadow-sm border border-danske-gray-light transition-shadow duration-300 relative overflow-hidden hover:shadow-md">
            <div className="text-4xl font-semibold text-danske-blue mb-2">7+</div>
            <div className="text-danske-text-light text-sm uppercase tracking-wider font-medium">Years Experience</div>
          </div>
          <div className="stat-card-gradient bg-gradient-to-b from-white to-danske-gray p-8 rounded-lg text-center shadow-sm border border-danske-gray-light transition-shadow duration-300 relative overflow-hidden hover:shadow-md">
            <div className="text-4xl font-semibold text-danske-blue mb-2">Full Stack & Salesforce</div>
            <div className="text-danske-text-light text-sm uppercase tracking-wider font-medium">Core Expertise</div>
          </div>
          <div className="stat-card-gradient bg-gradient-to-b from-white to-danske-gray p-8 rounded-lg text-center shadow-sm border border-danske-gray-light transition-shadow duration-300 relative overflow-hidden hover:shadow-md">
            <div className="text-4xl font-semibold text-danske-blue mb-2">React & AI</div>
            <div className="text-danske-text-light text-sm uppercase tracking-wider font-medium">Current Focus</div>
          </div>
          <div className="stat-card-gradient bg-gradient-to-b from-white to-danske-gray p-8 rounded-lg text-center shadow-sm border border-danske-gray-light transition-shadow duration-300 relative overflow-hidden hover:shadow-md">
            <div className="text-4xl font-semibold text-danske-blue mb-2">CS Graduate</div>
            <div className="text-danske-text-light text-sm uppercase tracking-wider font-medium">AI/ML Post Graduate</div>
          </div>
        </div>
      </div>
      
      <div className="bg-danske-gray py-16 mt-8">
        <div className="max-w-container mx-auto px-8">
          <h2 className="text-center text-danske-text text-3xl font-semibold mb-12 tracking-tight">Explore My Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/experience" className="link-card-gradient bg-gradient-to-b from-white to-danske-gray p-8 rounded-lg no-underline text-danske-text transition-all duration-300 shadow-sm border border-danske-gray-light relative overflow-hidden hover:shadow-md hover:border-[#c8d4e0]">
              <h3 className="text-danske-blue mb-4 text-xl font-semibold">💼 Professional Experience</h3>
              <p className="text-danske-text-light leading-relaxed text-[0.9375rem]">7+ years of delivering scalable solutions</p>
            </Link>
            <Link to="/education" className="link-card-gradient bg-gradient-to-b from-white to-danske-gray p-8 rounded-lg no-underline text-danske-text transition-all duration-300 shadow-sm border border-danske-gray-light relative overflow-hidden hover:shadow-md hover:border-[#c8d4e0]">
              <h3 className="text-danske-blue mb-4 text-xl font-semibold">📚 Education & Learning</h3>
              <p className="text-danske-text-light leading-relaxed text-[0.9375rem]">Continuous growth in technology and development</p>
            </Link>
            <Link to="/skills" className="link-card-gradient bg-gradient-to-b from-white to-danske-gray p-8 rounded-lg no-underline text-danske-text transition-all duration-300 shadow-sm border border-danske-gray-light relative overflow-hidden hover:shadow-md hover:border-[#c8d4e0]">
              <h3 className="text-danske-blue mb-4 text-xl font-semibold">🛠️ Technical Skills</h3>
              <p className="text-danske-text-light leading-relaxed text-[0.9375rem]">Full-stack and Salesforce expertise</p>
            </Link>
            <Link to="/projects" className="link-card-gradient bg-gradient-to-b from-white to-danske-gray p-8 rounded-lg no-underline text-danske-text transition-all duration-300 shadow-sm border border-danske-gray-light relative overflow-hidden hover:shadow-md hover:border-[#c8d4e0]">
              <h3 className="text-danske-blue mb-4 text-xl font-semibold">🚀 Projects & Portfolio</h3>
              <p className="text-danske-text-light leading-relaxed text-[0.9375rem]">Real-world applications and solutions</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
