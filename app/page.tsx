"use client"

import { motion } from "framer-motion"
import Hero from "./components/Hero"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </motion.main>
  )
}

