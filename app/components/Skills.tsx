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
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        {Object.entries(skillsData).map(([category, skills], index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8"
          >
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span key={i} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

