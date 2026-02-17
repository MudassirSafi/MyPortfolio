import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = ({ scrollToSection }) => {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter"
        >
          Build <span className="text-gradient">Impact</span>
        </motion.h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
          Have a project in mind? I'm available for freelance work and always excited to collaborate on <span className="text-white">innovative ideas</span>.
        </p>

        <div className="flex flex-wrap gap-6 justify-center mb-16">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:muhammedmudassir40@gmail.com"
            className="btn-primary flex items-center gap-3 px-10 py-5"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/MudassirSafi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-3 px-10 py-5"
          >
            <Github className="w-5 h-5" />
            GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/muhammad-mudassir5/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-3 px-10 py-5"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 sm:p-12 text-left"
        >
          <h3 className="text-3xl font-black font-display uppercase mb-8">Start a Conversation</h3>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Project Budget (USD)"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
            />
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
            />
            <button
              onClick={() => {
                const name = document.querySelector('input[placeholder="Your Name"]').value;
                const email = document.querySelector('input[placeholder="Your Email"]').value;
                const budget = document.querySelector('input[placeholder="Project Budget (USD)"]').value;
                const message = document.querySelector('textarea[placeholder="Tell me about your project..."]').value;

                window.location.href = `mailto:muhammedmudassir40@gmail.com?subject=Project Inquiry from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0ABudget: ${budget}%0D%0A%0D%0AMessage:%0D%0A${message}`;
              }}
              className="w-full btn-primary py-5 text-lg"
            >
              Send Message
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
