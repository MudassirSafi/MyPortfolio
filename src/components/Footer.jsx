import React from 'react';
import { Mail, Github, Linkedin, Heart } from 'lucide-react';

const Footer = ({ profileImage }) => {
    return (
        <footer className="py-12 px-4 border-t border-white/5 backdrop-blur-md bg-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-white/10 shadow-lg bg-gray-900">
                                <img
                                    src={profileImage}
                                    alt="Mudassir Safi"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-red-500 to-blue-500 flex items-center justify-center font-black text-xl text-white">MS</div>';
                                    }}
                                />
                            </div>
                            <div>
                                <span className="font-bold text-xl tracking-tight block">Mudassir Safi</span>
                                <span className="text-sm text-gray-400">Full Stack Developer</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Specialized in building modern, scalable web applications with cutting-edge technologies.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Quick Links</h3>
                        <div className="space-y-2 text-sm">
                            <a href="#hero" className="block text-gray-400 hover:text-white transition-colors">Home</a>
                            <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
                            <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
                            <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <a
                                href="mailto:muhammedmudassir40@gmail.com"
                                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-red-500/30 transition-all"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com/MudassirSafi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-red-500/30 transition-all"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/muhammad-mudassir-843964272/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-red-500/30 transition-all"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-sm text-gray-500">
                    <p className="flex items-center justify-center gap-2">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by Mudassir Safi © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
