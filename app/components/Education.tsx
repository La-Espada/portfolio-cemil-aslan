import { motion } from "framer-motion"

export default function Education() {
  const educationData = [
    {
      institution: "Technische Universität Wien",
      degree: "Bachelor of Science in Computer Science",
      date: "Oct 2024 - Present",
      details: "Relevant courses: Algorithms and Data Structures, Software Engineering, Databases, Distributed Systems",
    },
    {
      institution: "HTBLVA Wien 5 Spengergasse",
      degree: "Higher Technical College, Matura in Computer Science",
      date: "Sep 2018 - May 2023",
    },
  ]

  return (
    <section className="py-10 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Education</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">Oct 2024 - Present</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Relevant courses: Algorithms and Data Structures, Software Engineering, Databases, Distributed Systems
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Higher Technical College, Matura in Computer Science
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">Sep 2018 - May 2023</p>
          </div>
        </div>
      </div>
    </section>
  )
}

