import { motion } from "framer-motion"

export default function Projects() {
  const projectsData = [
    {
      name: "Treydit",
      description: "Second-hand trading platform developed with React (Frontend) and Spring Boot (Backend)",
      tags: ["React", "Spring Boot", "Full-Stack"],
    },
    {
      name: "WageDoc",
      description:
        "Xamarin application for precise time tracking for flextime employees, with automatic working time calculation",
      tags: ["C#", "Xamarin", "Mobile Development"],
    },
    {
      name: "RDF-Simulator",
      description:
        "TypeScript simulator that accurately replicates the functions of a Radio Direction Finder for Frequentis AG",
      tags: ["TypeScript", "Algorithm Design", "Simulation"],
    },
  ]

  return (
    <section className="py-10 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Portfolio Website
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.
            </p>
          </div>
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

