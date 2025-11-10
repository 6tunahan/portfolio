'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Ensight Data & AI",
    position: "Long Term Data Engineering Intern",
    period: "September 2025 - Present",
    duties: [
      "Built data workflows on Microsoft Fabric and integrated MCP services.",
      "Developed analytics dashboards using Power BI.",
      "Queried and transformed datasets with SQL."
    ]
  },
  {
    company: "Popupsmart",
    position: "Quality Assurance Test Engineer",
    period: "September 2025 - Present",
    duties: [
      "Conducting automated tests using Cypress, Selenium, and Playwright",
      "Performing manual testing for UI/UX validation",
      "Participating in each stage of the Software Development Life Cycle (SDLC)"
    ]
  },
  {
    company: "Apparelte App",
    position: "Backend & AI Developer Intern",
    period: "July 2025 - August 2025",
    duties: [
      "Developed backend applications using the Django Framework.",
      "Contributed to the development of outfit recognition with AI features.",
      "Worked with version control tools such as Git and GitHub.",
      "Designed RESTful APIs.",
      "Created user interface designs using Figma."
    ]
  },
  {
    company: "Meta3D",
    position: "Computer Engineering Intern",
    period: "July 2024 - August 2024",
    duties: [
      "AI Oriented Chatbot Generation with RASA Framework for 3D Printers",
      "Designed RESTful APIs.",
      "R&D on new projects produced by 3D Printers and preparation of detailed documentation",
      "I had the opportunity to experience the startup environment at Ankara TEKMER."
    ]
  },
  {
    company: "Sleep Inn & Suites",
    position: "Supervisor",
    location: "Phoenix, United States",
    period: "June 2023 - October 2023",
    duties: [
      "I utilized CRM systems to attract potential customers and enhance customer satisfaction while competing with rival hotels during the tourist season.",
      "Oversee daily operations in the hotel, ensuring efficient service delivery and guest satisfaction",
      "Supervise and support staff, providing guidance and training to ensure high performance and adherence to hotel standards"
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg p-6 relative"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">{exp.company}</h3>
                  <p className="text-lg font-medium text-gray-300">{exp.position}</p>
                  {exp.location && (
                    <p className="text-gray-400">{exp.location}</p>
                  )}
                </div>
                <p className="text-gray-400 md:text-right mt-2 md:mt-0">{exp.period}</p>
              </div>
              <ul className="space-y-2">
                {exp.duties.map((duty, dutyIndex) => (
                  <li key={dutyIndex} className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    {duty}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
