'use client'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import HireMe from './components/HireMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StarField from './components/StarField'

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden relative">
      <StarField />
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="space-y-20"
      >
        <Hero />
        <Skills />
        <Services />
        <Projects />
        <About />
        <HireMe />
        <Contact />
        <Footer />
      </motion.div>
    </main>
  )
}