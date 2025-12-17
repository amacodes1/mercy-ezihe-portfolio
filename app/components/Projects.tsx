'use client'
import { motion } from 'framer-motion'
import Godfactor from "@/app/assets/png/godfactor.png"
import Audiophile from "@/app/assets/png/audiophile.png"
import Bingdum from "@/app/assets/png/bingdum.png"
import StellzOge from "@/app/assets/png/stellzoge.png"
import Taxlator from "@/app/assets/png/taxlator.png"
import Ticket from "@/app/assets/png/ticket.png"
import Userid from "@/app/assets/png/userid.png"
import Image from 'next/image'

const projects = [
  {
    name: "GodFactor Brand",
    thumbnail: Godfactor,
    tech: ["NextJs", "Node.js", "MongoDB"],
    description: "An E-commerce shoe brand website.",
    live: "https://www.godfactorbrand.com/",
  },
  {
    name: "StellzOge Ventures",
    thumbnail: StellzOge,
    tech: ["Next.js", "TypeScript", "Prisma"],
    description: "A E-commerce wholesale provisions website.",
    live: "https://stellz-oge-ventures.vercel.app/",
  },
  {
    name: "Bingdum",
    thumbnail: Bingdum,
    tech: ["React", "Chart.js", "API"],
    description: "A dating app.",
    live: "https://bingdum.com/",
  },
  {
    name: "UserID",
    thumbnail: Userid,
    tech: ["NextJs", "Node.js", "MongoDB"],
    description:
      "A modern React + Vite application with a user directory interface featuring dark mode support, real-time search, and responsive design.",
    live: "https://user-directory-rho.vercel.app/",
  },
  {
    name: "Taxlator",
    thumbnail: Taxlator,
    tech: ["Next.js", "TypeScript", "Prisma"],
    description: "A tax calculator website.",
    live: "https://stellz-oge-ventures.vercel.app/",
  },
  {
    name: "Ticket Management",
    thumbnail: Ticket,
    tech: ["React", "Chart.js", "API"],
    description:
      "A modern, responsive ticket management system built to streamline your customer support experience with an intuitive interface for tracking, managing, and resolving support tickets.",
    live: "https://ticket-management-react-beige.vercel.app/",
  },
  {
    name: "Audiophile",
    thumbnail: Audiophile,
    tech: ["React", "Chart.js", "API"],
    description:
      "An e-commerce platform for premium audio equipment which features a complete shopping experience with cart management, checkout system, and order processing.",
    live: "https://audiophile-ochre-one.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-5 md:py-20 px-3 md:px-10 bg-black text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <p className="text-white/60 mb-8">Check out some of My Works</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            whileHover={{ scale: 1.05 }}
            className="relative bg-gray-900 p-4 rounded overflow-hidden group"
          >
            <div className="w-full h-48 rounded mb-4 flex items-center justify-center">
              <Image
                width={700}
                height={500}
                src={project.thumbnail}
                alt={project.name}
                className=" object-cover"
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
              />
            </div>
            <div className="flex gap-2 justify-center mb-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-purple-600 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/80 text-white flex flex-col justify-center items-center opacity-0 transition"
            >
              <p className="text-white/60 mb-2 px-4">{project.description}</p>
              <a
                href={project.live}
                target="_blank"
                className="text-purple-400 underline"
              >
                Live Link
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}