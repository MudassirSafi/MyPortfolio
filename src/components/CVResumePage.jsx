import React, { useState, useRef } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Globe, Download, Eye, Github, Loader2, FileText } from 'lucide-react';
import html2pdf from 'html2pdf.js';

const CVResumePage = ({ onBack, profileImage }) => {
    const [previewType, setPreviewType] = useState('html');
    const [isGenerating, setIsGenerating] = useState(false);
    const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
    const cvRef = useRef(null);

    const cvData = {
        personalInfo: {
            name: "Muhammad Mudasir",
            title: "Full Stack Developer",
            location: "Islamabad, Pakistan",
            email: "muhammedmudassir40@gmail.com",
            phone: "+92 320 9820283",
            website: "www.mudassir-safi.com",
            linkedin: "linkedin.com/in/muhammad-mudassir-843964272",
            github: "github.com/MudassirSafi",
        },
        summary: "Dedicated Full Stack Developer with extensive experience in architecting and implementing scalable, high-performance web applications. Proficient in modern full-stack development (MongoDB, Express, React, Node.js), with a strong focus on delivering robust, user-centric solutions. Skilled in modern frontend frameworks, cloud integrations, and developing efficient backend systems. Committed to writing clean, maintainable code and staying at the forefront of emerging technologies to drive technical excellence and business impact.",
        experience: [
            {
                title: "Software Engineer",
                company: "FluxtonX",
                period: "Aug 2025 - Present",
                achievements: [
                    "Developing and maintaining full-stack web applications with modern architectures.",
                    "Optimizing frontend performance and backend scalability for complex systems.",
                    "Leading technical initiatives and ensuring code quality across projects."
                ]
            },
            {
                title: "Full Stack Developer",
                company: "Quant Aeonix",
                period: "Jan 2025 - July 2025",
                achievements: [
                    "Architected scalable systems and implemented complex frontend features.",
                    "Collaborated on product strategy and optimized application performance.",
                    "Delivered enterprise-grade solutions for diverse business needs."
                ]
            },
            {
                title: "Full Stack Developer",
                company: "Devrolin",
                period: "March 2024 - Dec 2024",
                achievements: [
                    "Built robust web solutions using MongoDB, Express, React, and Node.js.",
                    "Implemented real-time features and secure authentication systems.",
                    "Completed intensive development phases for multiple client projects."
                ]
            },
            {
                title: "Web Development Intern",
                company: "TechnoHack Solutions",
                period: "Feb 2024 - March 2024",
                achievements: [
                    "Assisted in developing frontend components using React and Tailwind CSS.",
                    "Collaborated with senior developers to debug and optimize codebases.",
                    "Gained hands-on experience in modern web development workflows."
                ]
            }
        ],
        skills: {
            frontend: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3"],
            backend: ["Node.js", "Express.js", "REST APIs", "JWT", "RBAC"],
            database: ["MongoDB", "MySQL", "Supabase (RLS, Auth)"],
            tools: ["Python", "FastAPI", "RAG", "Vector Embeddings", "Git/GitHub"]
        },
        education: {
            degree: "BS Software Engineering",
            school: "PMAS Arid Agriculture University Rawalpindi",
            period: "2021 – 2025"
        },
        projects: [
            "Kopo Pay – Premium Banking Web Application",
            "Quant-Aeonix – IT Services & Software Company",
            "Medoryx – AI Medical Learning Platform",
            "Smart-echo – Smart Waste Management Admin Panel",
            "BudVizion – Real-time Streaming Platform",
            "2Wolf – Premium E-commerce Platform",
            "SME Dashboard – Business Analytics Platform",
            "Bizrolin – Professional Business Solutions"
        ]
    };

    const generatePdf = async (action) => {
        if (!cvRef.current) return;
        setIsGenerating(true);

        const opt = {
            margin: [10, 10, 10, 10],
            filename: 'Muhammad_Mudasir_Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff' },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        };

        try {
            if (action === 'download') {
                await html2pdf().set(opt).from(cvRef.current).save();
            } else if (action === 'blob') {
                const worker = html2pdf().set(opt).from(cvRef.current);
                const pdfBlob = await worker.outputPdf('blob');
                const url = URL.createObjectURL(new Blob([pdfBlob], { type: 'application/pdf' }));
                setPdfBlobUrl(url);
            }
        } catch (err) {
            console.error('PDF generation error:', err);
        } finally {
            setIsGenerating(false);
        }
    };

    const handleDownload = () => generatePdf('download');

    const handleActualPdf = async () => {
        setPreviewType('pdf');
        if (!pdfBlobUrl) {
            setTimeout(() => generatePdf('blob'), 100);
        }
    };

    const handleElegantView = () => {
        setPreviewType('html');
    };

    const CvHtmlContent = () => (
        <div
            ref={cvRef}
            style={{
                backgroundColor: '#ffffff',
                color: '#1a1a1a',
                fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
                padding: '48px',
                minHeight: '1100px',
            }}
        >
            <div style={{ borderBottom: '1px solid #e5e5e5', paddingBottom: '28px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
                    <div>
                        <h1 style={{ fontSize: '36px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-1px', lineHeight: 1, margin: 0, color: '#111' }}>
                            {cvData.personalInfo.name}
                        </h1>
                        <h2 style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', color: '#999', marginTop: '8px' }}>
                            {cvData.personalInfo.title}
                        </h2>
                    </div>
                    <div style={{ fontSize: '12px', fontWeight: 500, textAlign: 'right', color: '#555', lineHeight: '1.8' }}>
                        <div>{cvData.personalInfo.email}</div>
                        <div>{cvData.personalInfo.phone}</div>
                        <div>{cvData.personalInfo.location}</div>
                        <div>{cvData.personalInfo.github}</div>
                        <div>{cvData.personalInfo.website}</div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
                <div>
                    <div style={{ marginBottom: '28px' }}>
                        <h3 style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: '#999', borderBottom: '1px solid #eee', paddingBottom: '6px', marginBottom: '12px' }}>
                            Profile Summary
                        </h3>
                        <p style={{ fontSize: '13px', lineHeight: '1.7', color: '#444', margin: 0 }}>{cvData.summary}</p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: '#999', borderBottom: '1px solid #eee', paddingBottom: '6px', marginBottom: '20px' }}>
                            Professional Experience
                        </h3>
                        {cvData.experience.map((exp, i) => (
                            <div key={i} style={{ marginBottom: '24px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
                                    <h4 style={{ fontSize: '15px', fontWeight: 700, margin: 0, color: '#111' }}>{exp.title}</h4>
                                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#aaa' }}>{exp.period}</span>
                                </div>
                                <p style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: '#888', margin: '2px 0 8px 0' }}>{exp.company}</p>
                                <ul style={{ margin: 0, paddingLeft: '16px' }}>
                                    {exp.achievements.map((a, j) => (
                                        <li key={j} style={{ fontSize: '12px', color: '#555', lineHeight: '1.6', marginBottom: '4px' }}>{a}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div style={{ marginBottom: '28px' }}>
                        <h3 style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: '#999', borderBottom: '1px solid #eee', paddingBottom: '6px', marginBottom: '12px' }}>
                            Education
                        </h3>
                        <h4 style={{ fontSize: '13px', fontWeight: 700, margin: '0 0 2px 0', color: '#111' }}>{cvData.education.degree}</h4>
                        <p style={{ fontSize: '12px', color: '#666', margin: '0 0 2px 0' }}>{cvData.education.school}</p>
                        <p style={{ fontSize: '11px', color: '#aaa', fontWeight: 600, margin: 0 }}>{cvData.education.period}</p>
                    </div>

                    <div style={{ marginBottom: '28px' }}>
                        <h3 style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: '#999', borderBottom: '1px solid #eee', paddingBottom: '6px', marginBottom: '12px' }}>
                            Technical Expertise
                        </h3>
                        {Object.entries(cvData.skills).map(([category, skills]) => (
                            <div key={category} style={{ marginBottom: '12px' }}>
                                <h4 style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: '#bbb', marginBottom: '4px' }}>{category}</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 12px' }}>
                                    {skills.map((skill, i) => (
                                        <span key={i} style={{ fontSize: '11px', fontWeight: 600, color: '#333' }}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h3 style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', color: '#999', borderBottom: '1px solid #eee', paddingBottom: '6px', marginBottom: '12px' }}>
                            Notable Projects
                        </h3>
                        {cvData.projects.map((project, i) => (
                            <div key={i} style={{ fontSize: '12px', color: '#555', marginBottom: '6px', display: 'flex', gap: '6px' }}>
                                <span style={{ color: '#ccc' }}>▸</span>
                                {project}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            {/* Top Nav Bar */}
            <div style={{
                position: 'fixed', top: 0, width: '100%', zIndex: 50,
                backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
                borderBottom: '1px solid #e5e5e5', boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button
                        onClick={onBack}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px',
                            backgroundColor: '#f3f3f3', border: '1px solid #e0e0e0', borderRadius: '8px',
                            cursor: 'pointer', fontWeight: 700, fontSize: '14px', color: '#333'
                        }}
                    >
                        <ArrowLeft size={18} />
                        Back
                    </button>

                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <button
                            onClick={handleElegantView}
                            style={{
                                padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                                fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px',
                                backgroundColor: previewType === 'html' ? '#111' : '#f3f3f3',
                                color: previewType === 'html' ? '#fff' : '#555',
                                transition: 'all 0.2s'
                            }}
                        >
                            <Eye size={16} /> Elegant View
                        </button>

                        <button
                            onClick={handleActualPdf}
                            style={{
                                padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                                fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px',
                                backgroundColor: previewType === 'pdf' ? '#111' : '#f3f3f3',
                                color: previewType === 'pdf' ? '#fff' : '#555',
                                transition: 'all 0.2s'
                            }}
                        >
                            {isGenerating && previewType === 'pdf' ? <Loader2 size={16} className="animate-spin" /> : <FileText size={16} />}
                            Actual PDF
                        </button>

                        <div style={{ width: '1px', height: '20px', backgroundColor: '#e5e5e5', margin: '0 5px' }} />

                        <button
                            onClick={handleDownload}
                            style={{
                                padding: '10px 25px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                                fontWeight: 800, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px',
                                backgroundColor: '#111',
                                color: '#fff',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                transition: 'all 0.2s'
                            }}
                        >
                            <Download size={16} /> Download PDF
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div style={{ paddingTop: '100px', paddingBottom: '50px', paddingInline: '20px' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    {previewType === 'html' ? (
                        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', border: '1px solid #e5e5e5' }}>
                            <CvHtmlContent />
                        </div>
                    ) : (
                        <div style={{
                            backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.08)', border: '1px solid #e5e5e5',
                            height: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            position: 'relative'
                        }}>
                            {isGenerating ? (
                                <div style={{ textAlign: 'center', color: '#888' }}>
                                    <Loader2 size={48} className="animate-spin" style={{ margin: '0 auto 20px auto', display: 'block' }} />
                                    <p style={{ fontSize: '16px', fontWeight: 600 }}>Generating PDF preview...</p>
                                </div>
                            ) : pdfBlobUrl ? (
                                <iframe
                                    src={pdfBlobUrl}
                                    style={{ width: '100%', height: '100%', border: 'none', backgroundColor: '#fff' }}
                                    title="CV PDF Preview"
                                />
                            ) : (
                                <div style={{ textAlign: 'center', color: '#888' }}>
                                    <FileText size={48} style={{ margin: '0 auto 20px auto', display: 'block', opacity: 0.2 }} />
                                    <p style={{ fontSize: '16px', fontWeight: 600 }}>Click "Actual PDF" to view</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CVResumePage;
