'use client'
import { motion } from 'framer-motion'
import { techStack } from '../utils/techStack'

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen text-white flex flex-col items-center justify-center text-center overflow-hidden">
      <motion.h1 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }} 
        className="text-5xl font-bold"
      >
        Senior Frontend Developer
      </motion.h1>
      <p className="text-white/60 mt-4 max-w-xl">
        I build modern, animated, and responsive web experiences using cutting-edge technologies.
      </p>
      <div className="flex gap-4 mt-6">
        <a href="#projects" className="bg-purple-600 px-6 py-2 rounded text-white">See My Work</a>
        <a href="#contact" className="border border-purple-600 px-6 py-2 rounded text-white">Contact Me</a>
      </div>

      {/* Orbiting tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        {techStack.map((tech, i) => (
          <div key={tech.name} className="absolute animate-orbit" style={{ top: `${i * 5}%`, left: `${i * 3}%` }}>
            <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center text-xs">
              {tech.name.slice(0, 2)}
            </div>
          </div>
        ))}
      </div>


    </section>
  )
}