"use client";

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Hide the navbar on scroll down and close the menu
    if (scrollTop > lastScrollTop) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    // Close the menu on any scroll action
    if (isOpen) {
      setIsOpen(false);
    }

    setLastScrollTop(scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop, isOpen]);

  return (
    <header className={`w-full fixed top-0 bg-white shadow transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold text-primary"><a href='#hero'>Dreamy</a></div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-primary focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-8 text-primary">
          <li>
            <a href="#about" className="hover:text-secondary">About Us</a>
          </li>
          <li>
            <a href="#products" className="hover:text-secondary">Our Products</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-secondary">Contact</a>
          </li>
        </ul>
      </nav>
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <ul className="flex flex-col items-end space-y-2 bg-white p-4 text-primary">
          <li>
            <a href="#about" className="hover:text-secondary" onClick={closeMenu}>About Us</a>
          </li>
          <li>
            <a href="#products" className="hover:text-secondary" onClick={closeMenu}>Products</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-secondary" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
