'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
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
  hidden: { y: 50, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12
    }
  }
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-10 bg-linear-to-br from-gray-900 via-black to-gray-800 text-white text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Skills
        </h2>
        <p className="text-white/70 mb-16 text-lg">
          The skills, tools and technologies I am really good at:
        </p>
      </motion.div>
      
      <motion.div
        className="max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="group cursor-pointer"
              whileHover={{ 
                scale: 1.1,
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
            >
              <motion.div 
                className="relative p-6 rounded-2xl bg-linear-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(59, 130, 246, 0.2)",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)"
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  y: {
                    duration: 3 + (index % 3) * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }
                }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <motion.div 
                    className="w-16 h-16 flex items-center justify-center rounded-xl bg-linear-to-br from-blue-500/20 to-purple-600/20 group-hover:from-blue-400/30 group-hover:to-purple-500/30 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </motion.div>
                  <motion.span 
                    className="text-sm font-medium text-white/90 group-hover:text-white transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    {tech.name}
                  </motion.span>
                </div>
                
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)",
                    filter: "blur(20px)",
                    zIndex: -1
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}