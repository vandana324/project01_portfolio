import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#181818] text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-[#4081FA] to-[#FA0472] bg-clip-text text-transparent">
          <Link to="/">Vandana vaishnav</Link>
        </div>

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-xl focus:outline-none">
            {isOpen ? '✕' : 'Menu'}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-6 text-lg">
          <Link to="/" className="hover:text-pink-600">Home</Link>
          <a href="#about" className="hover:text-pink-600">About</a>
          <a href="#services" className="hover:text-pink-600">Services</a>
          <a href="#projects" className="hover:text-pink-600">Projects</a>
          <a href="#team" className="hover:text-pink-600">Team</a>
          <a href="#testimonial" className="hover:text-pink-600">Testimonial</a>
          <a href="#contact" className="hover:text-pink-600">Contact</a>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 flex flex-col gap-4 text-lg bg-[#181818]">
          <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-pink-600">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-pink-600">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-pink-600">Services</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-pink-600">Projects</a>
          <a href="#team" onClick={() => setIsOpen(false)} className="hover:text-pink-600">Team</a>
          <a href="#testimonial" onClick={() => setIsOpen(false)} className="hover:text-pink-600">Testimonial</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-pink-600">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
