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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Education</h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{edu.institution}</h3>
              <p className="text-muted-foreground mb-2">{edu.degree}</p>
              <p className="text-muted-foreground mb-2">{edu.date}</p>
              {edu.details && <p className="text-card-foreground">{edu.details}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

