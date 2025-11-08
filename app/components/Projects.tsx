'use client'
import { motion } from 'framer-motion'

const projects = [
  {
    name: 'E-Commerce Platform',
    thumbnail: '/assets/project1.png',
    tech: ['React', 'Node.js', 'MongoDB'],
    description: 'A full-stack e-commerce solution with payment integration.',
    live: 'https://project-one.vercel.app'
  },
  {
    name: 'Task Management App',
    thumbnail: '/assets/project2.png',
    tech: ['Next.js', 'TypeScript', 'Prisma'],
    description: 'A collaborative task management tool with real-time updates.',
    live: 'https://project-two.vercel.app'
  },
  {
    name: 'Weather Dashboard',
    thumbnail: '/assets/project3.png',
    tech: ['React', 'Chart.js', 'API'],
    description: 'A responsive weather application with location-based forecasts.',
    live: 'https://project-three.vercel.app'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <p className="text-white/60 mb-8">Check out some of My Works</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            whileHover={{ scale: 1.05 }}
            className="relative bg-gray-900 p-4 rounded overflow-hidden group"
          >
            <div className="w-full h-48 bg-linear-to-br from-purple-500 to-blue-500 rounded mb-4 flex items-center justify-center">
              <span className="text-white/80">Project Image</span>
            </div>
            <div className="flex gap-2 justify-center mb-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs bg-purple-600 px-2 py-1 rounded">{t}</span>
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/80 text-white flex flex-col justify-center items-center opacity-0 transition"
            >
              <p className="text-white/60 mb-2 px-4">{project.description}</p>
              <a href={project.live} target="_blank" className="text-purple-400 underline">Live Link</a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}