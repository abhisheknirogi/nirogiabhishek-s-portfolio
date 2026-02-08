import React from 'react';
import { motion } from 'framer-motion';
import Card from './ui/Card';
import Badge from './ui/Badge';
import SectionTitle from './ui/SectionTitle';

// Refactor notes: extracted `Card`, `Badge`, and `SectionTitle` so project
// layout, badges and headings are consistent and easier to maintain.

export default function Projects() {
  const projects = [
    {
      title: 'Personal Finance Tracker',
      description: 'Track expenses and savings using clean charts and responsive design.',
      tech: ['React', 'Tailwind CSS', 'Chart.js'],
      icon: '💰',
    },
    {
      title: 'Weather Dashboard',
      description: 'A modern and responsive weather app displaying real-time data for any city.',
      tech: ['React', 'API', 'Tailwind CSS'],
      icon: '🌤️',
    },
    {
      title: 'ShopSmart – Product Catalog',
      description: 'An elegant eCommerce catalog where users can browse, search, and filter products.',
      tech: ['React', 'MongoDB', 'Node.js'],
      icon: '🛍️',
    },
    {
      title: 'To-Do List Web App',
      description: 'A minimalist productivity tool with localStorage persistence.',
      tech: ['React', 'localStorage', 'Tailwind'],
      icon: '✅',
    },
    {
      title: 'Portfolio Website',
      description: 'This modern portfolio built with React, Tailwind CSS, and Framer Motion.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      icon: '🎯',
    },
    {
      title: 'AI Chatbot',
      description: 'An intelligent chatbot powered by machine learning algorithms.',
      tech: ['Python', 'ML', 'NLP'],
      icon: '🤖',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="projects"
      className="py-20 relative"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>Projects</SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={itemVariants} whileHover={{ y: -10 }}>
              <Card>
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, tIdx) => (
                    <Badge key={tIdx}>{tech}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
