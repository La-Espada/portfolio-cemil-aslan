import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react"
import Typed from "typed.js"

export default function Hero() {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer", "Solving challanges", "Building the web"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: false,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 relative overflow-hidden">
      {/* Futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 text-center md:text-left z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Cemil Aslan
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6 text-purple-200"><span ref={el}></span></h2>
        <p className="text-lg mb-8 text-purple-100">
          Passionate about creating efficient and scalable web applications. Based in Vienna, Austria.
        </p>
        <a
          href="#contact"
          className="bg-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-400 transition duration-300"
        >
          Get in Touch
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:w-1/2 mt-8 md:mt-0 z-10"
      >
        <Image
          src="/cemil-aslan.jpg?height=300&width=300"
          alt="Cemil Aslan"
          width={300}
          height={300}
          className="rounded-full mx-auto border-4 border-purple-300"
        />
      </motion.div>
    </section>
  )
}
