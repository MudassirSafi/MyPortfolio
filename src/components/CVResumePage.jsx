import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Globe, Download, Code2 } from 'lucide-react';

const CVResumePage = ({ onBack, profileImage }) => {
    const [activeTab, setActiveTab] = useState('preview');

    const cvData = {
        personalInfo: {
            name: "Mudassir Safi",
            title: "Full Stack Developer",
            location: "Islamabad, Pakistan",
            email: "muhammedmudassir40@gmail.com",
            phone: "+92 320 9820283",
            website: "www.mudassir-safi.com",
            linkedin: "linkedin.com/in/muhammad-mudassir-843964272",
            github: "github.com/MudassirSafi",
            image: profileImage
        },
        summary: "Passionate Full Stack Developer with 1+ years of experience building scalable web applications. Expertise in MERN Stack, React, Node.js, and cloud technologies. Successfully delivered 50+ projects with a 5.0 rating on Fiverr.",
        experience: [
            {
                title: "Full Stack Developer",
                company: "Quant Aeonix",
                period: "Jan 2026 - Present",
                achievements: [
                    "Developing and maintaining full-stack web applications",
                    "Optimizing frontend performance and backend scalability",
                    "Collaborating with cross-functional teams"
                ]
            },
            {
                title: "MERN Stack Developer",
                company: "Devrolin",
                period: "Jun 2025 - Dec 2025",
                achievements: [
                    "Built robust web solutions using MongoDB, Express, React, and Node.js",
                    "Implemented real-time features and secure authentication",
                    "6 months of intensive full-stack development"
                ]
            }
        ],
        skills: {
            frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
            backend: ["Node.js", "Express.js", "Python", "REST APIs"],
            database: ["MongoDB", "PostgreSQL", "Firebase"],
            cloud: ["AWS", "Docker", "CI/CD", "Vercel"]
        }
    };

    const handleDownload = () => {
        alert('Resume download started! Make sure you have a PDF file at /public/Mudassir_Safi_Resume.pdf');
    };

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white">
            <div className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <button onClick={onBack} className="flex items-center gap-2 px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all">
                            <ArrowLeft className="w-5 h-5" />
                            Back to Portfolio
                        </button>
                        <div className="flex gap-4">
                            <button onClick={() => setActiveTab('preview')} className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'preview' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'backdrop-blur-md bg-white/10 hover:bg-white/20'}`}>
                                Preview
                            </button>
                            <button onClick={() => setActiveTab('download')} className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'download' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'backdrop-blur-md bg-white/10 hover:bg-white/20'}`}>
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-24 px-4 pb-12">
                {activeTab === 'preview' ? (
                    <div className="max-w-5xl mx-auto">
                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-12">
                                <div className="flex items-start gap-8">
                                    <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden flex-shrink-0 bg-white/10">
                                        <img
                                            src={cvData.personalInfo.image}
                                            alt={cvData.personalInfo.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-4xl font-bold">MS</div>';
                                            }}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h1 className="text-5xl font-bold mb-2">{cvData.personalInfo.name}</h1>
                                        <p className="text-2xl text-purple-100 mb-6">{cvData.personalInfo.title}</p>
                                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                                            <div className="flex items-center gap-2"><Mail className="w-4 h-4" />{cvData.personalInfo.email}</div>
                                            <div className="flex items-center gap-2"><Phone className="w-4 h-4" />{cvData.personalInfo.phone}</div>
                                            <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{cvData.personalInfo.location}</div>
                                            <div className="flex items-center gap-2"><Globe className="w-4 h-4" />{cvData.personalInfo.website}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-12 space-y-8">
                                <section>
                                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Professional Summary</h2>
                                    <p className="text-gray-300 leading-relaxed">{cvData.summary}</p>
                                </section>
                                <section>
                                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-2">
                                        <Code2 className="w-8 h-8" />Technical Skills
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {Object.entries(cvData.skills).map(([category, skills]) => (
                                            <div key={category} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
                                                <h3 className="text-lg font-bold text-purple-300 mb-3 capitalize">{category}</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {skills.map((skill, i) => (
                                                        <span key={i} className="px-3 py-1 text-sm backdrop-blur-md bg-purple-500/20 border border-purple-400/30 rounded-full">{skill}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12">
                            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-8">
                                <Download className="w-16 h-16" />
                            </div>
                            <h2 className="text-4xl font-bold mb-4">Download My Resume</h2>
                            <p className="text-xl text-gray-300 mb-8">Get a PDF copy of my complete resume with all details.</p>
                            <button onClick={handleDownload} className="px-12 py-4 btn-primary rounded-xl font-semibold text-lg flex items-center gap-3 mx-auto">
                                <Download className="w-6 h-6" />Download Resume (PDF)
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CVResumePage;
