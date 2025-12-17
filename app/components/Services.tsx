const services = [
  { title: 'Frontend Development', description: 'Building responsive and performant UIs.' },
  { title: 'UI/UX Design', description: 'Designing intuitive user experiences.' },
  { title: 'Responsive Design', description: 'Ensuring mobile-first layouts.' },
  { title: 'Performance Optimization', description: 'Speeding up load times and interactions.' }
]

export default function Services() {
  return (
    <section id="services" className="py-6 md:py-20 px-3 md:px-10 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Services</h2>
      <p className="text-white/60 mb-8">How I Help You Succeed</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {services.map((service) => (
          <div key={service.title} className="bg-gray-900 p-6 rounded shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-white/60">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}