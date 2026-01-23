import React from 'react';
import { Code2, Layers, Terminal, Zap, Server, Database, Cloud, Cpu, Globe } from 'lucide-react';
import FloatingCard from './FloatingCard';

const TechStack = () => {
    const techStack = {
        frontend: [
            { name: 'React', icon: <Code2 />, color: 'from-cyan-400 to-blue-500' },
            { name: 'Next.js', icon: <Layers />, color: 'from-gray-700 to-black' },
            { name: 'TypeScript', icon: <Terminal />, color: 'from-blue-400 to-blue-600' },
            { name: 'Tailwind CSS', icon: <Zap />, color: 'from-teal-400 to-cyan-500' }
        ],
        backend: [
            { name: 'Node.js', icon: <Server />, color: 'from-green-500 to-green-700' },
            { name: 'Python', icon: <Code2 />, color: 'from-yellow-400 to-blue-500' },
            { name: 'MongoDB', icon: <Database />, color: 'from-green-400 to-green-600' },
            { name: 'PostgreSQL', icon: <Database />, color: 'from-blue-500 to-indigo-600' }
        ],
        cloud: [
            { name: 'AWS', icon: <Cloud />, color: 'from-orange-400 to-orange-600' },
            { name: 'Docker', icon: <Cpu />, color: 'from-blue-400 to-blue-600' },
            { name: 'Kubernetes', icon: <Globe />, color: 'from-blue-500 to-purple-600' },
            { name: 'CI/CD', icon: <Zap />, color: 'from-purple-400 to-pink-500' }
        ]
    };

    return (
        <section id="tech-stack" className="py-32 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-black mb-16 text-center uppercase tracking-tighter">
                    Tech <span className="text-gradient">Stack</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
                        <FloatingCard key={category} delay={categoryIndex * 100}>
                            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 h-full">
                                <h3 className="text-2xl font-bold mb-6 capitalize">{category}</h3>
                                <div className="space-y-4">
                                    {technologies.map((tech, i) => (
                                        <div
                                            key={i}
                                            className="group flex items-center gap-4 p-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                                        >
                                            <div className={`p-3 rounded-lg bg-gradient-to-br ${tech.color} group-hover:scale-110 transition-transform`}>
                                                {tech.icon}
                                            </div>
                                            <span className="font-semibold">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FloatingCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
