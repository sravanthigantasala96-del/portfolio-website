import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const NavLink = ({ to, children, isMobile = false }) => {
    const active = isActive(to);
    return (
      <li className={`w-full py-4 md:py-0 ${isMobile ? 'text-center' : 'md:w-auto'}`}>
        <Link
          to={to}
          className={`text-[0.9375rem] font-medium no-underline transition-colors duration-300 relative py-3 block w-full md:w-auto group ${
            active ? 'text-danske-blue' : 'text-danske-text-light hover:text-danske-blue'
          } ${isMobile ? 'text-center' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <span>{children}</span>
          {!isMobile && (
            <span className={`absolute bottom-0 left-0 h-[3px] bg-danske-blue rounded-t transition-all duration-300 ${
              active ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          )}
        </Link>
      </li>
    );
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-[1000] border-b border-danske-gray-light w-full">
      <div className="max-w-container mx-auto px-8 flex justify-between items-center h-[72px] relative">
        <Link to="/" className="text-xl font-semibold text-danske-blue no-underline transition-colors duration-300 tracking-tight hover:text-danske-blue-light">
          <span>Sai Sravanthi G</span>
        </Link>
        
        <button 
          className="md:hidden flex flex-col bg-transparent border-none cursor-pointer p-2 gap-1 z-[1001]" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          <span className={`w-[25px] h-[3px] bg-danske-text rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-[25px] h-[3px] bg-danske-text rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-[25px] h-[3px] bg-danske-text rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        
        {/* Desktop menu */}
        <ul className="hidden md:flex list-none gap-8 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </ul>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[72px] left-0 bg-white z-[999] md:hidden overflow-y-auto">
            <ul className="list-none flex flex-col w-full py-8 items-center">
              <NavLink to="/" isMobile={true}>Home</NavLink>
              <NavLink to="/about" isMobile={true}>About</NavLink>
              <NavLink to="/experience" isMobile={true}>Experience</NavLink>
              <NavLink to="/education" isMobile={true}>Education</NavLink>
              <NavLink to="/skills" isMobile={true}>Skills</NavLink>
              <NavLink to="/projects" isMobile={true}>Projects</NavLink>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
