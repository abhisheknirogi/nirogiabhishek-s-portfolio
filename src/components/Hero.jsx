import React from 'react';
import { motion } from 'framer-motion';
import Button, { btnClass } from './ui/Button';

// Refactor notes: replaced repeating `btn-primary` / `btn-secondary` class
// strings with a small `btnClass` helper so button styles are centralized.

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 mb-20 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ y: [30, 0, 30] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center z-10 px-4"
      >
        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          Abhishek Nirogi
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-blue-300 mb-4"
        >
          BCA (AI & ML) Student @ Akash Group of Institutions
        </motion.p>

        {/* Tagline */}
        <motion.h2
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-12"
        >
          🚀 Full-Stack Developer | AI/ML Enthusiast | Cloud Architect
        </motion.h2>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={btnClass('primary')}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={btnClass('secondary')}
          >
            Let's Connect
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <p className="text-gray-400 text-sm">Scroll to explore</p>
          <div className="text-2xl text-blue-400">↓</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
