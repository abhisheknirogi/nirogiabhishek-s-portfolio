import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';

export default function Contact() {
  const contactLinks = [
    { icon: '📧', label: 'Email', value: 'abhishek27127@gmail.com', href: 'mailto:abhishek27127@gmail.com' },
    { icon: '📍', label: 'Location', value: 'Bengaluru, India', href: 'https://www.google.com/search?q=bengaluru+india' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/nirogi-abhishek', href: 'https://www.linkedin.com/in/nirogi-abhishek-a80bba299/' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/abhisheknirogi', href: 'https://github.com/abhisheknirogi' },
    { icon: '📱', label: 'Phone', value: '+91 9035018208', href: 'tel:+919035018208' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="contact"
      className="py-20"
    >
      <div className="max-w-2xl mx-auto px-4 text-center">
        <SectionTitle>Get In Touch</SectionTitle>
        <p className="text-gray-400 mb-12">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <div className="grid grid-cols-1 gap-4">
          {contactLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : '_self'}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="glass-dark p-4 rounded-xl flex items-center gap-6 group hover:border-blue-400 transition-all border border-transparent"
            >
              <span className="text-2xl">{link.icon}</span>
              <div className="text-left">
                <p className="text-gray-400 text-xs uppercase tracking-widest">{link.label}</p>
                <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}