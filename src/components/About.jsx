import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black mb-16 text-center uppercase tracking-tighter"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-400 leading-relaxed">
              I'm a dedicated <span className="text-white font-black underline decoration-red-500/50">Full Stack Developer</span> with a strong foundation in modern web technologies. My professional journey in software engineering began in 2025, and since then, I've been focused on building scalable, user-centric applications.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              I specialize in the <span className="text-white font-black underline decoration-blue-500/50">MERN Stack</span> and have successfully delivered multiple complex projects, ranging from business dashboards to high-performance e-commerce platforms. I thrive on solving technical challenges and staying ahead of the AI-driven development curve.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {['Problem Solver', 'MERN Expert', 'Quick Learner', 'Detail-Oriented'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="px-4 py-2 backdrop-blur-md bg-red-500/10 border border-red-500/20 rounded-full text-sm font-bold text-red-400"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Code Quality', value: 98, from: { x: 50, y: -50 } },
              { label: 'Performance', value: 95, from: { x: -50, y: -50 } },
              { label: 'UI/UX Design', value: 92, from: { x: 50, y: 50 } },
              { label: 'Problem Solving', value: 96, from: { x: -50, y: 50 } }
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: skill.from.x, y: skill.from.y, rotate: 45 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, type: "spring" }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-colors group"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent mb-2">
                  {skill.value}%
                </div>
                <div className="text-sm text-gray-400 font-medium tracking-tight uppercase">{skill.label}</div>
                <div className="mt-3 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
                    className="h-full bg-gradient-to-r from-red-500 to-blue-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
