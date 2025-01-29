import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Cemil Aslan</h1>
        <h2 className="text-2xl md:text-3xl mb-6">Full-Stack Developer</h2>
        <p className="text-lg mb-8">
          Passionate about creating efficient and scalable web applications. Based in Vienna, Austria.
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
        >
          Get in Touch
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:w-1/2 mt-8 md:mt-0"
      >
        <Image
          src="/cemil-aslan.jpg?height=300&width=300"
          alt="Cemil Aslan"
          width={300}
          height={300}
          className="rounded-full mx-auto"
        />
      </motion.div>
    </section>
  )
}

