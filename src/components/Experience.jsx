import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase } from 'lucide-react';

const Experience = () => {
  const experience = [
    {
      title: "Full Stack Developer",
      company: "Quant Aeonix",
      period: "01 Jan 2026 - Present",
      description: "Leading the development of full-stack solutions and optimizing application performance.",
      achievements: ["Architecting scalable systems", "Implementing complex frontend features", "Collaborating on product strategy"],
      icon: <Briefcase />
    },
    {
      title: "MERN Stack Developer",
      company: "Devrolin",
      period: "Jun 2025 - Dec 2025",
      description: "Specialized in building end-to-end web applications using the MERN stack.",
      achievements: ["Developed real-time dashboards", "Integrated 3rd party APIs", "Ensured high code quality"],
      icon: <Code2 />
    }
  ];

  return (
    <section id="experience" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black mb-16 text-center uppercase tracking-tighter"
        >
          Professional <span className="text-gradient">Experience</span>
        </motion.h2>

        <div className="relative border-l-2 border-white/5 ml-2 sm:ml-4 md:ml-0 md:pl-12 space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="absolute -left-[9px] md:-left-[53px] top-2 w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_rgba(255,59,48,0.5)] z-10" />

              <div className="glass-card p-8 hover:border-red-500/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-black font-display uppercase text-white">{exp.title}</h3>
                    <p className="text-red-500 font-bold tracking-widest text-sm uppercase">{exp.company}</p>
                  </div>
                  <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gray-400 whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed italic">{exp.description}</p>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
