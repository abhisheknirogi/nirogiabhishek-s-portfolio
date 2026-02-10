import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';

// Small cleanup: use SectionTitle for consistent typography when needed.

export default function Footer() {
  const socialLinks = [
    { icon: '🔗', label: 'LinkedIn', url: 'https://www.linkedin.com/in/nirogi-abhishek-a80bba299/' },
    { icon: '🐙', label: 'GitHub', url: 'https://github.com/abhisheknirogi' },
    { icon: '✉️', label: 'Email', url: 'mailto:abhishek27127@gmail.com' },
  ];

  const techStack = [
    'React', 'Vue.js', 'Tailwind CSS', 'Node.js', 'Python', 'Django',
    'MongoDB', 'Express.js', 'Framer Motion', 'Next.js'
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="border-t border-blue-500/20 mt-20 py-12 relative"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Tech Stack */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="mb-12"
        >
          <p className="text-center text-gray-400 mb-6 text-sm uppercase tracking-wider">
            Built With Modern Technologies
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm rounded-full hover:border-blue-400 transition-colors cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center gap-8 mb-12"
        >
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-3xl hover:text-blue-400 transition-colors"
              title={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-500 text-sm"
        >
          <p>© 2026 Abhishek Nirogi | Built with React, Tailwind CSS & Framer Motion</p>
          
        </motion.div>
      </div>
    </motion.footer>
  );
}
