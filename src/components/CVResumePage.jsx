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
            title: "Full Stack Web Developer",
            location: "Islamabad, Pakistan",
            email: "muhammedmudassir40@gmail.com",
            phone: "+92 320 9820283",
            linkedin: "linkedin.com/in/muhammad-mudassir-843964272",
            github: "github.com/MudassirSafi",
        },
        summary: "Full Stack Web Developer specializing in React.js, Next.js, and Node.js — building production-ready web applications from UI through APIs and databases. Currently developing a FinTech banking platform with secure payments, dashboards, and scalable backend services. Experienced shipping live products (streaming, e-commerce, business dashboards) and owning backend systems for mobile platforms (Firebase, Firestore, payment gateways). Focused on clean architecture, performance, and reliable delivery.",
        experience: [
            {
                title: "Software Engineer",
                company: "FluxtonX",
                period: "Aug 2025 - Present",
                achievements: [
                    "Lead full-stack development on a FinTech web application: payment flows, merchant dashboards, and transaction monitoring using React.js and Node.js.",
                    "Design REST APIs and data models for secure financial operations; enforce authentication, validation, and maintainable service layers.",
                    "Improve frontend performance and backend scalability through code reviews, refactoring, and production-focused debugging."
                ]
            },
            {
                title: "Full Stack Developer",
                company: "Quant Aeonix",
                period: "Jan 2025 - July 2025",
                achievements: [
                    "Built and shipped client-facing features with React.js and Node.js/Express for enterprise web products.",
                    "Architected modular frontends and API integrations to support multiple business domains and faster iteration.",
                    "Optimized load times and API response patterns; collaborated with stakeholders on scope, timelines, and releases."
                ]
            },
            {
                title: "Full Stack Developer",
                company: "Devrolin",
                period: "March 2024 - Dec 2024",
                achievements: [
                    "Delivered MERN-stack applications with React.js, Node.js, Express, and MongoDB for client projects end to end.",
                    "Implemented JWT-based authentication, role-based access, and real-time features for production dashboards.",
                    "Owned multiple release cycles: requirements, implementation, testing, and deployment support."
                ]
            },
            {
                title: "Web Development Intern",
                company: "TechnoHack Solutions",
                period: "Feb 2024 - March 2024",
                achievements: [
                    "Developed responsive UI components with React.js and Tailwind CSS under senior developer guidance.",
                    "Fixed bugs and improved code quality across existing React codebases in an agile team environment."
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
        coreStack: ["React.js", "Next.js", "Node.js"],
        languages: [
            { name: "English", level: "Professional" },
            { name: "Urdu", level: "Native" }
        ],
        domainExpertise: [
            "FinTech & Digital Payments",
            "CRM & Treasury Automation",
            "Live Streaming (Production)",
            "E-commerce & SaaS Dashboards"
        ],
        projects: [
            {
                name: "Kopo Pay",
                context: "FinTech · Banking Web App (In Development)",
                highlights: [
                    "Stripe-style banking platform: secure payments, merchant dashboards, and real-time transaction monitoring.",
                    "Stack: React.js, Node.js, Express, MongoDB, Stripe API — aligned with current FinTech work at FluxtonX."
                ]
            },
            {
                name: "AgncyPay",
                context: "FinTech · CRM Automation · Full Stack Web Developer",
                highlights: [
                    "Smart CRM automation platform for institutional digital-asset flows; sole official CRM for Mainboard (~$200M USDT transacted annually on-platform).",
                    "Full-stack delivery: React.js/Next.js frontends, Node.js APIs, dashboards, transfers, balances, and secure client workflows on a monochrome enterprise brand system."
                ]
            },
            {
                name: "CDNT Bank",
                context: "FinTech · Live Banking & Crypto Platform",
                highlights: [
                    "Canadian Digital National Trust Bank — live web app for fiat and cryptocurrency deposits, withdrawals, and unified account management (cdntbank.com).",
                    "Banking-meets-crypto UX: insured-style accounts, balance dashboards, and regulated FinTech flows on a white UI with navy-blue brand system."
                ]
            },
            {
                name: "BudVizion",
                context: "Live · Real-Time Streaming Platform",
                highlights: [
                    "Production streaming product with active users; live broadcast, viewer engagement, and low-latency delivery.",
                    "Stack: React.js, Node.js, WebRTC, SQL — deployed and maintained at budvizion.com."
                ]
            },
            {
                name: "SkyRedi",
                context: "Travel & Aviation · Backend Engineer",
                highlights: [
                    "Travel platform: flights, ticketing, tracking, aviation weather, OCR for travel documents, Paystack/Flutterwave/Stripe, AI assistant, SITA baggage tracking.",
                    "Built Node.js backend with Firebase Auth, Cloud Storage, and Firestore for a Flutter mobile client."
                ]
            },
            {
                name: "2Wolf E-commerce",
                context: "E-Commerce · Live",
                highlights: [
                    "Premium storefront with checkout, product management, and Stripe payments.",
                    "Stack: Next.js, Node.js, Tailwind CSS."
                ]
            },
            {
                name: "SME Dashboard",
                context: "Business Analytics · Live",
                highlights: [
                    "SME dashboard with real-time analytics, financial tracking, and reporting modules.",
                    "Stack: React.js, Node.js, MongoDB, Chart.js."
                ]
            },
            {
                name: "Quant-Aeonix",
                context: "IT Services & Software Company · Live",
                highlights: [
                    "Company platform for IT services, scalable web architecture, and client-facing digital solutions.",
                    "Stack: React.js, Node.js, cloud deployments — quantaeonix.com."
                ]
            },
            {
                name: "Medoryx",
                context: "HealthTech · AI Platform (In Development)",
                highlights: [
                    "AI-driven medical learning and doctor–patient consultancy with scheduling and health insights.",
                    "Stack: React.js, AI/vector embeddings, modern API integrations."
                ]
            },
            {
                name: "Bizrolin",
                context: "Business Solutions · Live",
                highlights: [
                    "Professional services platform with scalable Node.js APIs and React.js frontends for client operations.",
                    "Stack: React.js, Node.js, Express, Tailwind CSS."
                ]
            },
            {
                name: "Smart-echo",
                context: "IoT / Waste Management · Admin Panel",
                highlights: [
                    "Admin dashboard for smart waste operations: monitoring, routing insights, and operational controls.",
                    "Stack: React.js, dashboard/SaaS patterns for field IoT data."
                ]
            }
        ]
    };

    const generatePdf = async (action) => {
        if (!cvRef.current) return;
        setIsGenerating(true);

        const opt = {
            margin: [8, 8, 8, 8],
            filename: `${cvData.personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2, 
                useCORS: true, 
                letterRendering: true,
                width: 800,
                windowWidth: 800
            },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak: { mode: ['css', 'legacy'] }
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

    const sectionTitleStyle = {
        fontSize: '10px',
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '3px',
        color: '#999',
        borderBottom: '1px solid #eee',
        paddingBottom: '5px',
        marginBottom: '10px',
        marginTop: 0
    };

    const CvHtmlContent = () => (
        <div
            ref={cvRef}
            style={{
                backgroundColor: '#ffffff',
                color: '#1a1a1a',
                fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
                padding: '28px 32px',
                width: '800px',
                margin: '0 auto',
                boxSizing: 'border-box'
            }}
        >
            <style>{`
                #cv-print-root * {
                    page-break-inside: auto !important;
                    break-inside: auto !important;
                }
                #cv-print-root h3,
                #cv-print-root h4,
                #cv-print-root p,
                #cv-print-root li {
                    page-break-after: auto !important;
                    break-after: auto !important;
                }
            `}</style>
            <div id="cv-print-root">
            <div style={{ borderBottom: '1px solid #e5e5e5', paddingBottom: '18px', marginBottom: '18px' }}>
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
                        <div>{cvData.personalInfo.linkedin}</div>
                        <div>{cvData.personalInfo.github}</div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.65fr 1fr', gap: '24px', alignItems: 'start' }}>
                <div>
                    <div style={{ marginBottom: '16px' }}>
                        <h3 style={sectionTitleStyle}>Profile Summary</h3>
                        <p style={{ fontSize: '12.5px', lineHeight: '1.55', color: '#444', margin: 0 }}>{cvData.summary}</p>
                    </div>

                    <div>
                        <h3 style={sectionTitleStyle}>Professional Experience</h3>
                        {cvData.experience.map((exp, i) => (
                            <div key={i} style={{ marginBottom: i === cvData.experience.length - 1 ? 0 : '14px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px', gap: '8px' }}>
                                    <h4 style={{ fontSize: '14px', fontWeight: 700, margin: 0, color: '#111' }}>{exp.title}</h4>
                                    <span style={{ fontSize: '10px', fontWeight: 600, color: '#aaa', whiteSpace: 'nowrap' }}>{exp.period}</span>
                                </div>
                                <p style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#888', margin: '2px 0 6px 0' }}>{exp.company}</p>
                                <ul style={{ margin: 0, paddingLeft: '14px' }}>
                                    {exp.achievements.map((a, j) => (
                                        <li key={j} style={{ fontSize: '11.5px', color: '#555', lineHeight: '1.45', marginBottom: '2px' }}>{a}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginBottom: '22px' }}>
                        <h3 style={{ ...sectionTitleStyle, marginBottom: '12px' }}>Education</h3>
                        <h4 style={{ fontSize: '12px', fontWeight: 700, margin: '0 0 4px 0', color: '#111' }}>{cvData.education.degree}</h4>
                        <p style={{ fontSize: '11px', color: '#666', margin: '0 0 4px 0', lineHeight: 1.5 }}>{cvData.education.school}</p>
                        <p style={{ fontSize: '10px', color: '#aaa', fontWeight: 600, margin: 0 }}>{cvData.education.period}</p>
                    </div>

                    <div style={{ marginBottom: '28px' }}>
                        <h3 style={{ ...sectionTitleStyle, marginBottom: '12px' }}>Core Stack</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {cvData.coreStack.map((item, i) => (
                                <span key={i} style={{ fontSize: '11px', fontWeight: 700, color: '#111', backgroundColor: '#f4f4f4', padding: '5px 10px', borderRadius: '4px' }}>{item}</span>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginBottom: '34px' }}>
                        <h3 style={{ ...sectionTitleStyle, marginBottom: '14px' }}>Technical Expertise</h3>
                        {Object.entries(cvData.skills).map(([category, skills], idx, arr) => (
                            <div key={category} style={{ marginBottom: idx === arr.length - 1 ? 0 : '14px' }}>
                                <h4 style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: '#bbb', marginBottom: '6px' }}>{category}</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 12px' }}>
                                    {skills.map((skill, i) => (
                                        <span key={i} style={{ fontSize: '10.5px', fontWeight: 600, color: '#333', lineHeight: 1.45 }}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginBottom: '38px' }}>
                        <h3 style={{ ...sectionTitleStyle, marginBottom: '12px' }}>Languages</h3>
                        {cvData.languages.map((lang, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', marginBottom: i === cvData.languages.length - 1 ? 0 : '10px' }}>
                                <span style={{ fontSize: '11px', fontWeight: 700, color: '#333' }}>{lang.name}</span>
                                <span style={{ fontSize: '10px', fontWeight: 600, color: '#888' }}>{lang.level}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{ paddingBottom: '12px' }}>
                        <h3 style={{ ...sectionTitleStyle, marginBottom: '12px' }}>Domain Experience</h3>
                        <ul style={{ margin: 0, paddingLeft: '14px' }}>
                            {cvData.domainExpertise.map((item, i) => (
                                <li key={i} style={{ fontSize: '10.5px', color: '#555', lineHeight: '1.55', marginBottom: i === cvData.domainExpertise.length - 1 ? 0 : '8px' }}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div style={{ gridColumn: '1 / -1', marginTop: '4px' }}>
                    <h3 style={sectionTitleStyle}>Selected Projects</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 22px', alignItems: 'start' }}>
                        {cvData.projects.map((project, i) => (
                            <div key={i}>
                                <h4 style={{ fontSize: '12px', fontWeight: 700, margin: '0 0 2px 0', color: '#111' }}>{project.name}</h4>
                                <p style={{ fontSize: '8.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: '#aaa', margin: '0 0 4px 0', lineHeight: 1.35 }}>{project.context}</p>
                                <ul style={{ margin: 0, paddingLeft: '13px' }}>
                                    {project.highlights.map((line, j) => (
                                        <li key={j} style={{ fontSize: '10.5px', color: '#555', lineHeight: '1.4', marginBottom: '1px' }}>{line}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
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
