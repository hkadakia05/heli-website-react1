import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#about">ABOUT ME</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
        <a href="#things">THINGS I DO</a>
      </div>
      <div className="nav-icons">
        <ThemeToggle />
        <button>🔗</button>
        <button>👤</button>
      </div>
    </nav>
  );
}
