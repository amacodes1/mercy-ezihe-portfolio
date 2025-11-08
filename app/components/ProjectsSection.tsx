import ProjectsCarousel from "./ProjectsCarousel";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "🛒 E-Commerce",
    link: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and team features.",
    tech: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
    image: "📋 Task Manager",
    link: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts and charts.",
    tech: ["React", "Chart.js", "OpenWeather API", "Tailwind"],
    image: "🌤️ Weather App",
    link: "#"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern portfolio website with animations and responsive design.",
    tech: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
    image: "💼 Portfolio",
    link: "#"
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "A content management system with markdown support and SEO optimization.",
    tech: ["Next.js", "MDX", "Prisma", "Vercel"],
    image: "📝 Blog CMS",
    link: "#"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-2">Featured Projects</h2>
      <p className="mt-2 text-white/70 mb-8">
        A selection of projects showcasing my skills in frontend development, full-stack applications, and modern web technologies.
      </p>

      {/* Desktop: 3 visible */}
      <div className="hidden lg:block">
        <ProjectsCarousel items={projects} visible={3} />
      </div>

      {/* Tablet: 2 visible */}
      <div className="hidden md:block lg:hidden">
        <ProjectsCarousel items={projects} visible={2} />
      </div>

      {/* Mobile: 1 visible */}
      <div className="md:hidden">
        <ProjectsCarousel items={projects} visible={1} />
      </div>
    </section>
  );
}