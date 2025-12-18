import React, { useEffect, useState } from 'react';
import { getEducation } from '../services/api';
import { FaGraduationCap, FaAward } from 'react-icons/fa';

const Education = () => {
    const [education, setEducation] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEducation = async () => {
            try {
                const data = await getEducation();
                setEducation(data);
            } catch (error) {
                console.error('Error fetching education:', error);
                // Fallback data
                setEducation([
                    {
                        id: 1,
                        degree: 'Master of Computer Applications (MCA)',
                        institution: 'Maharaja Institute of Technology',
                        location: 'Mysore',
                        year: '2024 - 2025',
                        cgpa: '8.5',
                        description: 'Specialized in advanced software development, web technologies, and database management systems.'
                    },
                    {
                        id: 2,
                        degree: 'Bachelor of Computer Applications (BCA)',
                        institution: "St. Joseph's First Grade College",
                        location: 'Mysore',
                        year: '2021 - 2023',
                        cgpa: '8.4',
                        description: 'Focused on programming fundamentals, data structures, and web development.'
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchEducation();
    }, []);

    if (loading) {
        return (
            <section id="education" className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <h2 className="section-title">Education</h2>
                    <div className="text-center text-slate-400">Loading education...</div>
                </div>
            </section>
        );
    }

    return (
        <section id="education" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Education</h2>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {education.map((edu) => (
                        <div key={edu.id} className="relative h-[280px] p-6 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden card-snake group hover:shadow-blue-500/20 hover:border-blue-500/30 transition-all duration-300">
                            <span className="snake-border"></span><span className="snake-border"></span><span className="snake-border"></span><span className="snake-border"></span>

                            {/* Abstract Glow */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Content Container */}
                            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center transition-all duration-500">

                                {/* Icon (Visible by default, Vanishes on Hover) */}
                                {/* Icon (Visible by default, Vanishes on Hover) */}
                                <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center text-3xl shadow-lg border border-purple-500/60 transition-all duration-300 group-hover:h-0 group-hover:mb-0 group-hover:opacity-0 group-hover:scale-0 overflow-hidden">
                                    <FaGraduationCap className="text-purple-400 drop-shadow-md" />
                                </div>

                                {/* Degree (Always Visible) */}
                                <h3 className="text-xl font-bold text-slate-100 mb-2 leading-tight px-4 transition-transform duration-300">{edu.degree}</h3>

                                {/* Hidden Details (Reveal on Hover) */}
                                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-500 flex flex-col items-center w-full">
                                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-bold mb-1 mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{edu.institution}</p>
                                    <p className="text-sm text-slate-400 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{edu.location}</p>

                                    <div className="flex items-center gap-3 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                        <span className="text-xs text-slate-500 bg-slate-800/50 px-2 py-1 rounded-full">{edu.year}</span>
                                        <span className="text-xs font-semibold text-purple-300 bg-purple-900/30 px-2 py-1 rounded-full flex items-center gap-1">
                                            <FaAward className="text-[10px]" /> CGPA: {edu.cgpa}
                                        </span>
                                    </div>

                                    <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-700/50 pt-3 w-full px-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                                        {edu.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
