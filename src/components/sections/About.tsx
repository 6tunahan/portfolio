'use client';

import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-gray-300">
              I am a senior computer engineering student with a secondary field in business administration, specializing in 
              financial data analytics, artificial intelligence, and venture capital. My combined background in deep technology 
              and business strategy uniquely positions me to identify and evaluate high-growth startups.
            </p>
            
            <p className="text-gray-300">
              As a leader in Google Developer Groups Turkey, I actively guide tech communities and drive innovation, 
              demonstrating my hands-on ability to provide operational support to founders.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Areas of Expertise</h3>
              <ul className="grid grid-cols-2 gap-4">
                <li className="text-gray-300">• Machine Learning</li>
                <li className="text-gray-300">• Financial Modelling</li>
                <li className="text-gray-300">• Data Analytics</li>
                <li className="text-gray-300">• Backend Development</li>
                <li className="text-gray-300">• Software Development Life Cycle</li>
                <li className="text-gray-300">• Database Management</li>
                <li className="text-gray-300">• Fund and Investment Management</li>
                <li className="text-gray-300">• LLMs</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-2">
                <p className="text-gray-300">TED University</p>
                <p className="text-gray-400">Bachelor's Degree, Computer Engineering (100% English Education)</p>
                <p className="text-gray-400">Secondary Field, Business Administration</p>
                <p className="text-gray-400">GPA: 3.05 | Business GPA: 3.67</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
