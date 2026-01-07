import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span>Sai Sravanthi G</span>
        </Link>
        
        <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/experience" className={`nav-link ${isActive('/experience')}`} onClick={() => setIsMenuOpen(false)}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/education" className={`nav-link ${isActive('/education')}`} onClick={() => setIsMenuOpen(false)}>
              Education
            </Link>
          </li>
          <li>
            <Link to="/skills" className={`nav-link ${isActive('/skills')}`} onClick={() => setIsMenuOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className={`nav-link ${isActive('/projects')}`} onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

