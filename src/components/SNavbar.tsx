import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { id: 'hero', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'experience', title: 'Experience' },
  { id: 'certificates', title: 'Certificates' },
  { id: 'articles', title: 'Articles' },
  { id: 'contact', title: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const scroll = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scroll, 100); // Wait for navigation to finish before scrolling
    } else {
      scroll();
    }

    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-light-navy shadow-lg py-4' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-2xl font-bold font-serif text-brand-teal hover:text-brand-light-slate transition-colors"
        >
          Harsh Joshi
        </button>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-brand-slate hover:text-brand-teal transition-colors duration-300"
            >
              {link.title}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-brand-light-slate focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-brand-light-navy transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen py-2' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-brand-slate hover:text-brand-teal transition-colors duration-300"
            >
              {link.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
