"use client";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Mercy Ezihe</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#projects" className="hover:text-purple-300 transition-colors">Projects</a>
          <a href="#testimonials" className="hover:text-purple-300 transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-purple-300 transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
            <div className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
          </div>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md md:hidden">
            <div className="flex flex-col space-y-4 p-6">
              <a href="#projects" className="hover:text-purple-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#testimonials" className="hover:text-purple-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="hover:text-purple-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}