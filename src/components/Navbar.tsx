
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-archeos-dark bg-opacity-95 shadow-md py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <img 
            src="https://geosquadai.github.io/archeos/assets/img/archeos-logo-white.png" 
            alt="Archeos Logo" 
            className="h-10"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
          <button onClick={() => scrollToSection('philosophers')} className="nav-link">Philosophers</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-archeos-dark bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-6 transition-all duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <button onClick={() => scrollToSection('home')} className="text-xl text-white hover:text-archeos-gold">Home</button>
        <button onClick={() => scrollToSection('features')} className="text-xl text-white hover:text-archeos-gold">Features</button>
        <button onClick={() => scrollToSection('philosophers')} className="text-xl text-white hover:text-archeos-gold">Philosophers</button>
        <button onClick={() => scrollToSection('about')} className="text-xl text-white hover:text-archeos-gold">About</button>
        <button onClick={() => scrollToSection('contact')} className="text-xl text-white hover:text-archeos-gold">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
