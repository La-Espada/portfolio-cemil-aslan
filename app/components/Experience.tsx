import { motion } from "framer-motion"

export default function Experience() {
  const experienceData = [
    {
      company: "BlueHealthUS Inc.",
      position: "Backend Developer",
      date: "Oct 2023 - Present",
      details: [
        "Developed and optimized the backend of the BlueWatch Mobile-App using Django",
        "Implemented RESTful APIs for efficient communication between frontend and backend",
        "Actively collaborated in an agile development team",
      ],
    },
    {
      company: "Psychiatrie-Zentrum Favoriten",
      position: "IT Infrastructure Support",
      date: "May 2024 - Sep 2024",
      details: ["Supported maintenance and expansion of IT infrastructure, focusing on stability and security"],
    },
    {
      company: "Tageszentrum Oriongasse",
      position: "Civil Service",
      date: "Aug 2023 - Apr 2024",
      details: ["Assisted in daily care and organization of activities for seniors, strengthening social skills"],
    },
    {
      company: "DenizBank AG",
      position: "IT All-rounder (Internship)",
      date: "Aug 2021",
      details: [
        "Administered and maintained hardware and software",
        "Developed inventory management software that optimized workflow",
      ],
    },
  ]

  return (
    <section className="py-20 bg-slate-100 dark:bg-gray-850">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Work Experience</h2>
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2 text-foreground">{exp.company}</h3>
              <p className="text-muted-foreground mb-2">{exp.position}</p>
              <p className="text-muted-foreground mb-2">{exp.date}</p>
              <ul className="list-disc list-inside text-foreground">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

