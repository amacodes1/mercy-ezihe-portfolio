
const testimonials = [
  {
    quote: "Strong engineering instincts and a delightful attention to detail.",
    author: "Product Lead"
  },
  {
    quote: "Ship-quality components and great collaboration.",
    author: "Engineering Manager"
  },
  {
    quote: "Highly reliable, fast delivery and clear communication.",
    author: "CTO"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold">Testimonials</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10"
          >
            <p className="text-white/90 mb-3">
              &quot;{testimonial.quote}&quot;
            </p>
            <p className="text-white/60 text-sm">— {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}