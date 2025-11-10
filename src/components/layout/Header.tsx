'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-white">
            TY
          </a>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="#experience" className="text-white hover:text-gray-300 transition-colors">
              Experience
            </a>
            <a href="#about" className="text-white hover:text-gray-300 transition-colors">
              About
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-4"
          >
            <a href="#home" className="block text-white hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="#experience" className="block text-white hover:text-gray-300 transition-colors">
              Experience
            </a>
            <a href="#about" className="block text-white hover:text-gray-300 transition-colors">
              About
            </a>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};
