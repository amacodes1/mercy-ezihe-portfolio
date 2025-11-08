import OrbitGraphic from "./OrbitGraphic";

export default function OrbitSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold">Motion Experiments</h2>
      <p className="mt-2 text-white/70">
        Interactive orbit and particle experiments built with SVG and Framer Motion.
      </p>
      <OrbitGraphic />
    </section>
  );
}