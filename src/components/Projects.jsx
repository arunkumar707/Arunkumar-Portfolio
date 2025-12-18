import React, { useEffect, useState } from 'react';
import { getProjects } from '../services/api';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getProjects();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
                // Fallback data
                setProjects([
                    {
                        id: 1,
                        title: 'AI-Driven Smart Healthcare System',
                        description: 'A comprehensive healthcare platform featuring AI-powered symptom analysis, intelligent doctor scheduling, role-based dashboards for patients and doctors, and secure authentication. Built with modern MERN stack architecture.',
                        techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'AI/ML', 'JWT'],
                        githubUrl: 'https://github.com/arunkumar707/healthcare-system',
                        liveUrl: 'https://healthcare-demo.com',
                        featured: true
                    },
                    {
                        id: 2,
                        title: 'Online Vehicle Rental System',
                        description: 'Full-featured vehicle rental platform with advanced booking system, integrated payment gateway, real-time availability tracking, and comprehensive admin dashboard for fleet management.',
                        techStack: ['React.js', 'Node.js', 'MySQL', 'Stripe', 'Express.js'],
                        githubUrl: 'https://github.com/arunkumar707/vehicle-rental',
                        liveUrl: 'https://vehicle-rental-demo.com',
                        featured: true
                    },
                    {
                        id: 3,
                        title: 'Pharmacy Management System',
                        description: 'designed to manage day-to-day pharmacy operations efficiently. The system handles inventory management, billing, prescription tracking, and sales reporting to reduce manual errors and improve operational accuracy.',
                        techStack: ['Java', 'Java Swing', 'MySQL', 'JDBC'],
                        githubUrl: 'https://github.com/arunkumar707/pharmacy-management',
                        liveUrl: null,
                        featured: false
                    },
                    {
                        id: 4,
                        title: 'React School Dashboard',
                        description: 'The dashboard is developed using React.js with a strong emphasis on reusable components, responsive layouts, and user-friendly UI design. It includes structured pages, dynamic data rendering, and interactive UI elements that simulate real-world school management workflows. The application follows best practices in frontend development, making it easy to maintain and extend.',
                        techStack: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS'],
                        githubUrl: 'https://github.com/arunkumar707/react-school-dashboard',
                        liveUrl: null,
                        featured: false
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <section id="projects" className="py-20 bg-slate-800">
                <div className="container mx-auto px-6">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="text-center text-slate-400">Loading projects...</div>
                </div>
            </section>
        );
    }

    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Featured Projects</h2>

                <div className="max-w-3xl mx-auto flex flex-col gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`card p-6 flex flex-col hover:scale-[1.02] transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] border border-purple-500/10 hover:border-blue-500/40`}
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex flex-col gap-2">
                                    {project.featured && (
                                        <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-[10px] font-semibold tracking-wider border border-cyan-500/20 w-fit">
                                            FEATURED
                                        </span>
                                    )}
                                    <h3 className="text-2xl font-bold text-slate-100">{project.title}</h3>
                                </div>
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300 group/link shrink-0 hover:-translate-y-1"
                                    >
                                        <FaGithub className="text-xl group-hover/link:text-purple-400 transition-colors" />
                                        <span className="group-hover/link:text-transparent group-hover/link:bg-clip-text group-hover/link:bg-gradient-to-r group-hover/link:from-purple-300 group-hover/link:to-blue-300 font-semibold">Code</span>
                                    </a>
                                )}
                            </div>

                            <p className="text-slate-300 mb-4 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech, index) => (
                                    <span key={index} className="tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Code Link Moved to Top */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
