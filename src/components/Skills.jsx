import React, { useEffect, useState } from 'react';
import { getSkills } from '../services/api';
import { FaReact, FaNode, FaDatabase, FaGitAlt, FaRocket, FaRobot, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiNestjs, SiMongodb, SiMysql, SiTypescript, SiJavascript, SiOpenai } from 'react-icons/si';
import { BsCursorFill } from 'react-icons/bs';

const iconMap = {
    'React.js': <FaReact />,
    'Node.js': <FaNode />,
    'NestJS': <SiNestjs />,
    'TypeScript': <SiTypescript />,
    'JavaScript': <SiJavascript />,
    'Tailwind CSS': <SiTailwindcss />,
    'MySQL': <SiMysql />,
    'MongoDB': <SiMongodb />,
    'Git': <FaGitAlt />,
    'ChatGPT': <SiOpenai />,
    'Cursor': <BsCursorFill />,
    'Antigravity': <FaRocket />,
    'GitHub Copilot': <FaGithub />,
};


const colorMap = {
    'HTML5': 'text-orange-500',
    'CSS3': 'text-blue-500',
    'JavaScript': 'text-yellow-400',
    'React.js': 'text-cyan-400',
    'TypeScript': 'text-blue-600',
    'Tailwind CSS': 'text-cyan-500',
    'Bootstrap': 'text-purple-600',
    'Node.js': 'text-green-500',
    'NestJS': 'text-red-600',
    'MySQL': 'text-blue-400',
    'Git': 'text-orange-600',
    'GitHub': 'text-slate-100',
    'VS Code': 'text-blue-500',
    'XAMPP': 'text-orange-500',
    'ChatGPT': 'text-teal-500',
    'Cursor': 'text-slate-200',
    'Antigravity': 'text-purple-500',
    'GitHub Copilot': 'text-slate-300'
};

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const data = await getSkills();
                setSkills(data);
            } catch (error) {
                console.error('Error fetching skills:', error);
                // Fallback data if API fails
                setSkills([
                    { id: 1, category: 'Frontend', name: 'HTML5', level: 90 },
                    { id: 2, category: 'Frontend', name: 'CSS3', level: 90 },
                    { id: 3, category: 'Frontend', name: 'JavaScript', level: 85 },
                    { id: 4, category: 'Frontend', name: 'React.js', level: 85 },
                    { id: 5, category: 'Frontend', name: 'TypeScript', level: 80 },
                    { id: 6, category: 'Frontend', name: 'Tailwind CSS', level: 85 },
                    { id: 7, category: 'Frontend', name: 'Bootstrap', level: 80 },
                    { id: 8, category: 'Backend', name: 'Node.js', level: 85 },
                    { id: 9, category: 'Backend', name: 'NestJS', level: 80 },
                    { id: 11, category: 'Database', name: 'MySQL', level: 85 },
                    { id: 11, category: 'Database', name: 'MySQL', level: 85 },
                    { id: 13, category: 'Development Tools', name: 'Git', level: 85 },
                    { id: 14, category: 'Development Tools', name: 'GitHub', level: 85 },
                    { id: 15, category: 'Development Tools', name: 'VS Code', level: 90 },
                    { id: 16, category: 'Development Tools', name: 'XAMPP', level: 75 },
                    { id: 17, category: 'AI Tools', name: 'ChatGPT', level: 90 },
                    { id: 18, category: 'AI Tools', name: 'Cursor', level: 85 },
                    { id: 19, category: 'AI Tools', name: 'Antigravity', level: 95 },
                    { id: 20, category: 'AI Tools', name: 'GitHub Copilot', level: 85 },
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);

    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});

    if (loading) {
        return (
            <section id="skills" className="py-20 bg-slate-800">
                <div className="container mx-auto px-6">
                    <h2 className="section-title">Skills & Technologies</h2>
                    <div className="text-center text-slate-400">Loading skills...</div>
                </div>
            </section>
        );
    }

    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="section-title animate-fade-in">
                    Skills & Technologies
                </h2>

                <div className="max-w-6xl mx-auto">
                    {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                        <div key={category} className="mb-12">
                            <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-gradient-to-b from-purple-500 to-blue-600 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                                {category}
                            </h3>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {categorySkills.map((skill) => (
                                    <div key={skill.id} className="holo-card group">
                                        <div className="holo-shimmer"></div>
                                        <div className="flex items-center gap-4 mb-4 relative z-10">
                                            <div className={`${colorMap[skill.name] || 'text-cyan-400'} text-2xl group-hover:scale-110 transition-transform duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]`}>
                                                {iconMap[skill.name] || <FaDatabase />}
                                            </div>
                                            <h4 className="text-base font-bold text-slate-100">{skill.name}</h4>
                                        </div>

                                        {skill.level && (
                                            <div className="mt-2 relative z-10">
                                                <div className="flex justify-between text-xs font-medium text-slate-400 mb-1.5">
                                                    <span>Proficiency</span>
                                                    <span className="text-cyan-400">{skill.level}%</span>
                                                </div>
                                                <div className="w-full bg-slate-700/50 rounded-full h-1.5 backdrop-blur-sm overflow-hidden">
                                                    <div
                                                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1.5 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                                                        style={{ width: `${skill.level}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
