import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input, Textarea } from './ui/Input';
import { btnClass } from './ui/Button';
import SectionTitle from './ui/SectionTitle';

// Refactor notes: inputs and textarea consolidated into small `Input` helpers
// to keep markup DRY and ensure consistent focus/placeholder styles.

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactLinks = [
    { icon: '📧', label: 'Email', value: 'abhishek27127@gmail.com', href: 'mailto:abhishek27127@gmail.com' },
    { icon: '📍', label: 'Location', value: 'Bengaluru, India', href: '#' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/nirogi-abhishek', href: 'https://www.linkedin.com/in/nirogi-abhishek-a80bba299/' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/abhisheknirogi', href: 'https://github.com/abhisheknirogi' },
    { icon: '📱', label: 'Phone', value: '+91 9035018208', href: 'tel:+919035018208' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a backend
    alert('Thanks for reaching out! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="contact"
      className="py-20 relative"
    >
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle>Get In Touch</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Links */}
            <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            {contactLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                whileHover={{ x: 10 }}
                className="glass-dark p-6 rounded-xl flex items-start gap-4 group hover:border-blue-400 transition-all"
              >
                <span className="text-3xl mt-1">{link.icon}</span>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide">{link.label}</p>
                  <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-dark p-8 rounded-xl space-y-6"
          >
            <div>
              <label className="block text-white font-semibold mb-2">Name</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full ${btnClass('primary')}`}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}
