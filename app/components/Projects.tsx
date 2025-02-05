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

  const getTagColor = (tag: string) => {
    const colors = {
      "React": "bg-blue-500 dark:bg-blue-600",
      "Spring Boot": "bg-green-500 dark:bg-green-600",
      "Full-Stack": "bg-purple-500 dark:bg-purple-600",
      "C#": "bg-indigo-500 dark:bg-indigo-600",
      "Xamarin": "bg-blue-500 dark:bg-blue-600",
      "Mobile Development": "bg-cyan-500 dark:bg-cyan-600",
      "TypeScript": "bg-blue-500 dark:bg-blue-600",
      "Algorithm Design": "bg-red-500 dark:bg-red-600",
      "Simulation": "bg-orange-500 dark:bg-orange-600"
    }
    return colors[tag] || "bg-gray-500 dark:bg-gray-600"
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2 text-foreground">{project.name}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className={`${getTagColor(tag)} text-white px-2 py-1 rounded-full text-sm hover:opacity-90 transition-opacity`}
                  >
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

