import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';

// Refactor: using `SectionTitle` for consistent section headings across pages.

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="about"
      className="py-20 relative"
    >
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle>About Me</SectionTitle>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-dark p-8 rounded-2xl space-y-6"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Hi, I'm <span className="text-blue-400 font-bold">Abhishek</span> — a passionate student developer skilled in <span className="text-blue-400">Python, HTML5, CSS3, Git & GitHub, UI/UX design, and Machine Learning</span>. I'm also mastering modern frameworks like <span className="text-blue-400">React, Vue.js, Tailwind CSS, and Node.js</span> to build scalable, full-stack web applications.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm passionate about creating intelligent, creative, and user-friendly digital products. I'm currently pursuing <span className="text-blue-400 font-bold">BCA (AI & ML specialization)</span> at Akash Group of Institutions, Bengaluru. My interests span across web development, UI/UX design, cloud infrastructure, and exploring how AI and machine learning can solve real-world problems.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I believe in continuous learning and staying updated with the latest technologies. This portfolio itself is built with <span className="text-blue-400">React + Tailwind CSS</span>, demonstrating my expertise in modern web development.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
