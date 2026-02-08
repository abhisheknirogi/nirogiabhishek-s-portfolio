import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';

// Use SectionTitle for consistent headings and spacing

export default function Skills() {
  const skillCategories = [
    {
      title: '🔧 Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
      ],
    },
    {
      title: '🎨 Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Canvas / Animation', level: 90 },
      ],
    },
    {
      title: '⚙️ Backend & Databases',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'Django', level: 75 },
        { name: 'MongoDB', level: 85 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'Full-Stack Dev', level: 85 },
      ],
    },
    {
      title: '☁️ DevOps & Cloud',
      skills: [
        { name: 'AWS EC2', level: 80 },
        { name: 'Vercel', level: 90 },
        { name: 'Cloud Deployment', level: 85 },
        { name: 'Server Management', level: 75 },
        { name: 'Linux/Ubuntu', level: 80 },
        { name: 'Hosting', level: 90 },
      ],
    },
    {
      title: '🤖 AI & Machine Learning',
      skills: [
        { name: 'Machine Learning', level: 75 },
        { name: 'Data Analysis', level: 80 },
        { name: 'Problem Solving', level: 90 },
        { name: 'AI/ML Projects', level: 80 },
      ],
    },
    {
      title: '🎯 Design & Tools',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'UI/UX Principles', level: 85 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'Web Performance', level: 80 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="skills"
      className="py-20 relative"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>Skills & Expertise</SectionTitle>
        <p className="text-center text-gray-400 mb-16">Here's what I can bring to your team</p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-12"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-blue-400 border-l-4 border-blue-500 pl-4">
                {category.title}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="skill-card space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                      <span className="text-sm text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-blue-500/20 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
