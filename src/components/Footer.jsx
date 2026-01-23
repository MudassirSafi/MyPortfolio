import React from 'react';
import { Mail, Github, Linkedin, Heart } from 'lucide-react';

const Footer = ({ profileImage }) => {
    return (
        <footer className="py-12 px-4 border-t border-white/5 backdrop-blur-md bg-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gray-900 border border-white/10 rounded-xl flex items-center justify-center font-black text-xl text-red-500 shadow-lg">
                                MS
                            </div>
                            <span className="font-bold text-xl tracking-tight">Mudassir Safi</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Full Stack Developer specialized in building modern web applications
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
                                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com/MudassirSafi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/muhammad-mudassir-843964272/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
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
