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
    <section className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Work Experience</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Backend Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-1">Oct 2023 - Present</p>
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Developed and optimized the backend of the BlueWatch Mobile-App using Django</li>
              <li>• Implemented RESTful APIs for efficient communication between frontend and backend</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

