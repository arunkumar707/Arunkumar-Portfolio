import React, { useEffect, useState, useRef } from 'react';
import { getExperience } from '../services/api';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaDownload, FaCheckCircle, FaEye } from 'react-icons/fa';

const Experience = () => {
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);
    const containerRef = useRef(null);

    useEffect(() => {
        const fetchExperience = async () => {
            try {
                const data = await getExperience();
                setExperiences(data);
            } catch (error) {
                console.error('Error fetching experience:', error);
                // Fallback data
                setExperiences([
                    {
                        id: 1,
                        title: 'Full Stack Developer Intern',
                        company: 'Inventech Info Solutions Pvt. Ltd.',
                        location: 'Bangalore',
                        startDate: 'Dec 2025',
                        endDate: 'Present',
                        current: true,
                        offerLetterUrl: '/letter1.jpeg',
                        description: [
                            'Working on real-time web applications using React.js and Node.js',
                            'Developing reusable React components following best practices',
                            'Building RESTful APIs with proper authentication and authorization',
                            'Managing MySQL databases and optimizing queries for performance',
                            'Collaborating with UI/UX team to implement responsive designs',
                            'Participating in code reviews and following agile methodologies'
                        ]
                    },
                    {
                        id: 2,
                        title: 'Full Stack Developer (Academic Intern)',
                        company: 'Pepino Technology (OPC) Pvt. Ltd.',
                        location: 'Bangalore',
                        startDate: 'Jun 2025',
                        endDate: 'Aug 2025',
                        current: false,
                        offerLetterUrl: '/pepino.jpeg',
                        description: [
                            'Built full-stack applications using MERN stack',
                            'Implemented CRUD operations with MongoDB and Express.js',
                            'Developed responsive user interfaces with React.js and CSS',
                            'Collaborated in a team environment using Git and GitHub',
                            'Followed proper project workflows and version control practices',
                            'Participated in daily standups and sprint planning meetings'
                        ]
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchExperience();
    }, []);

    if (loading) {
        return (
            <section id="experience" className="py-20 bg-slate-900">
                <div className="container mx-auto px-6">
                    <h2 className="section-title">Experience</h2>
                    <div className="text-center text-slate-400">Loading experience...</div>
                </div>
            </section>
        );
    }

    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Work Experience</h2>

                <div className="max-w-2xl mx-auto relative pl-4 md:pl-0" ref={containerRef}>

                    {/* SVG Animated Line Container */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 justify-center pointer-events-none hidden md:flex">
                        <svg className="h-full w-full overflow-visible">
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                                    <stop offset="10%" stopColor="#06b6d4" stopOpacity="0.8" />
                                    <stop offset="90%" stopColor="#3b82f6" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            {/* Glowing Background Blur Line */}
                            <line
                                x1="50%" y1="0"
                                x2="50%" y2="100%"
                                stroke="url(#lineGradient)"
                                strokeWidth="4"
                                className="opacity-40 blur-[6px]"
                            />

                            {/* Solid Core Line */}
                            <line
                                x1="50%" y1="0"
                                x2="50%" y2="100%"
                                stroke="url(#lineGradient)"
                                strokeWidth="2"
                                className="opacity-90"
                            />
                        </svg>
                    </div>

                    {/* Straight Timeline Line connecting center of cards */}
                    <div className="absolute left-[29px] top-6 bottom-6 w-0.5 bg-purple-500/50 hidden md:block"></div>

                    {/* Mobile Line (Simple fallback) */}
                    <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500 md:hidden"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className="relative flex flex-col md:flex-row gap-8 md:pl-16 group">

                                {/* Timeline Dot (Interactive) */}
                                {/* Timeline Dot (Interactive) */}
                                {/* Timeline Dot (Interactive Sun Glow) */}
                                {/* Timeline Dot (Interactive Sun Glow - No Border, Purple-Blue Mix) */}
                                <div className="absolute left-2 md:left-[29px] top-8 transform -translate-x-1/2 z-10 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shadow-[0_0_15px_5px_rgba(168,85,247,0.5)] group-hover:scale-125 transition-all duration-300">
                                    </div>
                                </div>

                                {/* Content Card - Reduced Size (60%) & Purple/Blue Shadow */}
                                <div className="w-full ml-6 md:ml-0">
                                    <div className="card p-4 hover:scale-[1.01] transition-transform duration-300 relative overflow-hidden group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] border-t border-purple-500/20 hover:border-blue-500/30">
                                        {/* Corner Accent */}
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/10 to-transparent -mr-10 -mt-10 rounded-full transition-all group-hover:scale-150"></div>

                                        <div className="relative z-10">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                                                <div>
                                                    <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 group/title cursor-default">
                                                        <span className="text-yellow-500 text-base group-hover/title:scale-125 transition-transform duration-300 inline-block">
                                                            <FaBriefcase />
                                                        </span>
                                                        <span className="group-hover/title:text-yellow-500 group-hover/title:scale-105 transition-all duration-300 inline-block origin-left">{exp.title}</span>
                                                    </h3>
                                                    <h4 className="text-sm font-semibold text-cyan-400 mt-1">{exp.company}</h4>
                                                </div>

                                                <div className="flex flex-col items-start md:items-end gap-2 text-sm text-slate-400">
                                                    <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700 group/date hover:border-orange-500/50 transition-colors">
                                                        <span className="text-orange-500 group-hover/date:scale-125 transition-transform duration-300 inline-block">
                                                            <FaCalendar />
                                                        </span>
                                                        <span className="group-hover/date:text-orange-400 group-hover/date:scale-105 transition-all duration-300 inline-block origin-left">{exp.startDate} - {exp.endDate}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 group/location">
                                                        <span className="text-red-500 group-hover/location:scale-125 transition-transform duration-300 inline-block">
                                                            <FaMapMarkerAlt />
                                                        </span>
                                                        <span className="group-hover/location:text-red-400 group-hover/location:scale-105 transition-all duration-300 inline-block origin-left">{exp.location}</span>
                                                    </div>

                                                    {/* View Letter Link */}
                                                    {exp.offerLetterUrl && (
                                                        <a
                                                            href={exp.offerLetterUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2 group/view cursor-pointer mt-1"
                                                        >
                                                            <span className="text-green-500 group-hover/view:scale-125 transition-transform duration-300 inline-block">
                                                                <FaEye />
                                                            </span>
                                                            <span className="text-slate-300 text-xs font-medium group-hover/view:text-green-400 group-hover/view:scale-105 transition-all duration-300 inline-block origin-left">View</span>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 mb-6">
                                                {/* Green Current Position Badge */}
                                                {exp.current && (
                                                    <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20 flex items-center gap-2 animate-slide-up animate-pulse-soft shadow-lg shadow-green-500/20 cursor-default">
                                                        <FaCheckCircle className="text-[10px]" />
                                                        CURRENT POSITION
                                                    </span>
                                                )}

                                                {/* Download Button Removed - Moved to View Link */}
                                            </div>

                                            {/* Description - Compact */}
                                            <ul className="space-y-2">
                                                {exp.description.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm group/item">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover/item:bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.5)] transition-colors"></span>
                                                        <span className="leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
