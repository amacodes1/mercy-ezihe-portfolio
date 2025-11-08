'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-black text-white flex justify-between items-center px-6 py-4 z-50">
      <h1 className="text-xl font-bold">Mercy</h1>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-sm">
        <li><a href="#skills" className="hover:text-purple-500 font-bold text-[14px]">Skills</a></li>
        <li><a href="#services" className="hover:text-purple-500 font-bold text-[14px]">Services</a></li>
        <li><a href="#projects" className="hover:text-purple-500 font-bold text-[14px]">Projects</a></li>
        <li><a href="#about" className="hover:text-purple-500 font-bold text-[14px]">About</a></li>
        <li><a href="#contact" className="hover:text-purple-500 font-bold text-[14px]">Contact</a></li>
        <li><Link href="/resume.pdf" target="_blank" className="hover:text-purple-500 font-bold text-[14px]">Resume</Link></li>
      </ul>

      {/* Mobile Hamburger */}
      <button 
        className="md:hidden cursor-pointer flex flex-col gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black md:hidden">
          <ul className="flex flex-col gap-4 p-6 text-sm">
            <li><a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-purple-500 font-bold text-[14px]">Skills</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)} className="hover:text-purple-500 font-bold text-[14px]">Services</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-purple-500 font-bold text-[14px]">Projects</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-purple-500 font-bold text-[14px]">About</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-purple-500 font-bold text-[14px]">Contact</a></li>
            <li><Link href="/resume.pdf" target="_blank" className="hover:text-purple-500 font-bold text-[14px]" onClick={() => setIsOpen(false)}>Resume</Link></li>
          </ul>
        </div>
      )}
    </nav>
  )
}