"use client";
import { motion } from "framer-motion";
// import SplineAnimation from "./SplineAnimation";
// import { techStack } from '../utils/techStack'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen text-white flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {" "}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Frontend Developer
      </motion.h1>
      <p className="text-white/60 mt-4 max-w-xl">
        I build modern, animated, and responsive web experiences using
        cutting-edge technologies.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <a href="#projects" className="swipe-btn btn-primary">
          See My Work
        </a>

        <button className="swipe-btn btn-secondary">Contact Me</button>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ position: "absolute", width: 0, height: 0 }}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
              result="goo"
            />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>
    </section>
  );
}
