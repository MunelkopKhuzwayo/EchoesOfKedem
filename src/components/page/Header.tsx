"use client";

import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="font-headline text-4xl  font-bold text-primary">Karin Kedem Music</a>
        
        {/* Burger menu icon for small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-primary focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#music" className="text-2xl font-bold text-primary hover:text-primary transition-colors">Music</a>
          <a href="#verses" className="text-2xl font-bold text-primary hover:text-primary transition-colors">Verses</a>
          <a href="#associates" className="text-2xl font-bold text-primary hover:text-primary transition-colors">Associates</a>
          <a href="#contact" className="text-2xl font-bold text-primary hover:text-primary transition-colors">Contact</a>
        </nav>
      </div>

      {/* Mobile Navigation (conditionally rendered) */}
      {isMenuOpen && (
        <nav className="md:hidden bg-opacity-90 absolute top-full left-0 right-0 py-4 shadow-lg z-50">
          <div className="container mx-auto flex flex-row justify-between items-center">
            <div></div>
            <a href="#music" className="text-xl font-bold text-primary hover:text-white transition-colors" onClick={toggleMenu}>Music</a>
            <a href="#verses" className="text-xl font-bold text-primary hover:text-white transition-colors" onClick={toggleMenu}>Verses</a>
            <a href="#associates" className="text-xl font-bold text-primary hover:text-white transition-colors" onClick={toggleMenu}>Associates</a>
            <a href="#contact" className="text-xl font-bold text-primary hover:text-white transition-colors" onClick={toggleMenu}>Contact</a>
            <div></div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;