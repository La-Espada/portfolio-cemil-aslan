import { motion } from "framer-motion"

export default function Skills() {
  const skillsData = {
    "Programming Languages": ["Java", "C#", "JavaScript", "Python", "SQL"],
    Technologies: [
      "Spring Boot",
      ".Net",
      "React",
      "Django",
      "NodeJs",
      "Postgres",
      "MongoDB",
      "HTML",
      "CSS",
      "MySQL",
      "Docker",
      "Kubernetes",
      "Angular",
      "TypeScript",
      "REST",
      "Git",
      "PowerBI",
    ],
    Methods: ["Agile Development (Scrum)", "Microservices", "Test-Driven Development (TDD)", "Clean Code", "MVC"],
  }

  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Programming Languages
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Python</li>
              <li>• JavaScript/TypeScript</li>
              <li>• Java</li>
              {/* Add more skills */}
            </ul>
          </div>
          {/* Add more skill categories */}
        </div>
      </div>
    </section>
  )
}

