import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="font-headline text-2xl font-bold text-primary">Karin Kedem</a>
        <nav className="md:flex items-center space-x-6">
          <a href="#music" className="text-sm font-medium hover:text-primary transition-colors">Music</a>
          <a href="#verses" className="text-sm font-medium hover:text-primary transition-colors">Verses</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;