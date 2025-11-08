"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

interface ProjectsCarouselProps {
  items: Project[];
  visible: number;
}

export default function ProjectsCarousel({ items, visible }: ProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const getVisibleItems = () => {
    const result = [];
    for (let i = 0; i < visible; i++) {
      const index = (currentIndex + i) % items.length;
      result.push(items[index]);
    }
    return result;
  };

  return (
    <div className="relative">
      <div className="flex gap-6 overflow-hidden">
        <AnimatePresence mode="wait">
          {getVisibleItems().map((project, index) => (
            <motion.div
              key={`${project.id}-${currentIndex}-${index}`}
              className={`shrink-0 ${visible === 1 ? 'w-full' : visible === 2 ? 'w-1/2' : 'w-1/3'}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 h-full">
                <div className="w-full h-48 bg-linear-to-br from-purple-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white/80">{project.image}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-600/30 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
      >
        →
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-purple-500' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}