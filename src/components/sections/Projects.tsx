'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "Microsoft Fabric & MCP Services Integration",
    description: "Built data workflows and integrated MCP services at Ensight Data & AI",
    tech: ["Microsoft Fabric", "Power BI", "SQL", "Data Analytics"],
    image: "/project1.jpg",
    link: "#"
  },
  {
    title: "AI Chatbot for 3D Printers",
    description: "Developed AI-oriented chatbot using RASA Framework at Meta3D",
    tech: ["Python", "RASA Framework", "AI", "NLP"],
    image: "/project2.jpg",
    link: "#"
  },
  {
    title: "Outfit Recognition System",
    description: "Contributed to AI-powered outfit recognition at Apparelte App",
    tech: ["Django", "AI", "REST APIs", "Figma"],
    image: "/project3.jpg",
    link: "#"
  },
  {
    title: "SMART Ankara Project",
    description: "Second place in Sustainable Urban Mobility Plan Hackathon 2024",
    tech: ["Urban Mobility", "Sustainability", "Project Planning"],
    image: "/project4.jpg",
    link: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-blue-500/10" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
