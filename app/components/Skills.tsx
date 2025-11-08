'use client'
import { motion } from 'framer-motion'
import { techStack } from '../utils/techStack'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <p className="text-white/60 mb-8">My Technical Proficiency</p>
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {techStack.map((tech) => (
          <motion.div key={tech.name} className="flex flex-col items-center" variants={itemVariants}>
            <div className="w-10 h-10 bg-purple-600 rounded flex items-center justify-center text-xs mb-2">
              {tech.name.slice(0, 2)}
            </div>
            <span className="mt-2 text-sm">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}