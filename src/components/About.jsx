import React, { useState } from 'react';
import { FaDownload, FaMapMarkerAlt, FaEnvelope, FaBriefcase, FaCode, FaCheckCircle, FaReact, FaNodeJs, FaDatabase, FaLayerGroup, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiNestjs, SiMysql } from 'react-icons/si';
import profileImg from '../assets/profile.jpg';
import backendIcon from '../assets/backend.png';

const About = () => {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Modern Heading */}
                <h2 className="section-title animate-fade-in">
                    About Me
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">

                    {/* Rotating Text Badge - Absolute positioned */}
                    <div className="absolute -top-12 -right-12 z-20 hidden md:block">
                        <div className="relative w-32 h-32 flex items-center justify-center">
                            <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                                <path
                                    id="textPath"
                                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                    fill="transparent"
                                />
                                <text className="text-[11px] font-bold uppercase tracking-widest fill-cyan-400">
                                    <textPath href="#textPath" startOffset="0%">
                                        • Full Stack Developer • Based in Bangalore
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>

                    {/* Left Column - Profile Card */}
                    <div className="md:col-span-1">
                        <div className="h-full p-8 flex flex-col items-center text-center relative overflow-hidden rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-2xl transition-transform hover:scale-[1.02] duration-300 card-snake">
                            <span className="snake-border"></span><span className="snake-border"></span><span className="snake-border"></span><span className="snake-border"></span>

                            {/* Slide 1: Profile Image (Starts shifted down) */}
                            {/* Abstract Background Blob */}
                            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-cyan-500/20 to-transparent"></div>

                            {/* Profile Image */}
                            <div className="w-48 h-48 rounded-full border-4 border-cyan-500/30 mb-6 mt-14 relative z-10 overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-2xl shadow-cyan-500/20">
                                <img
                                    src={profileImg}
                                    alt="Arun Kumar A N"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Slide 2: Content (Starts shifted up) */}
                            <h3 className="text-2xl font-bold text-slate-100 mb-1">Arun Kumar A N</h3>
                            <a href="mailto:arunkumar.a.n707@gmail.com" className="text-sm text-cyan-400 mb-8 hover:underline">
                                arunkumar.a.n707@gmail.com
                            </a>

                            <div className="mt-6 w-full">
                                <a
                                    href="/resume.pdf"
                                    download="Arun_Kumar_Full_Stack_Developer.pdf"
                                    className="w-full py-3 rounded-full bg-slate-950 text-white font-semibold flex items-center justify-center gap-2 hover:bg-slate-900 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 group"
                                >
                                    <FaDownload className="group-hover:animate-bounce" />
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Info Stack */}
                    <div className="md:col-span-2 flex flex-col gap-6">

                        {/* Top Card - About Bio */}
                        <div className="p-8 relative overflow-hidden rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-xl transition-transform hover:scale-[1.01] duration-300 card-snake">
                            <span className="snake-border"></span><span className="snake-border"></span><span className="snake-border"></span><span className="snake-border"></span>
                            <div className="flex items-start mb-6">
                                <span className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20 flex items-center gap-2 animate-slide-up animate-pulse-soft shadow-lg shadow-green-500/20">
                                    <FaCheckCircle className="text-[10px]" /> Open to work
                                </span>
                            </div>

                            <p className="text-slate-300 leading-relaxed text-sm font-light tracking-wide mb-6">
                                I’m <span className="text-cyan-400 font-medium">Arun Kumar A N</span>, a passionate Full Stack Developer with hands-on experience in building scalable and user-friendly web applications using modern frontend and backend technologies. I currently work as a <span className="text-cyan-400 font-medium">Full Stack Developer Intern</span>, developing real-time applications with React.js, Node.js, MySQL, and JavaScript, with a strong focus on clean UI, reusable components, and efficient REST APIs.
                            </p>

                            <p className="text-slate-300 leading-relaxed text-sm font-light tracking-wide">
                                I have a solid foundation in React, TypeScript, Tailwind CSS, Node.js, NestJS, and MySQL, and I enjoy solving problems by turning complex requirements into simple, effective solutions. I’m highly motivated, continuously learning, and eager to grow as a Full Stack Developer while contributing to real-world products and collaborative teams.
                            </p>
                        </div>


                        {/* Bottom Row - Roles & Stacks */}
                        <div className="grid md:grid-cols-2 gap-6 flex-grow">

                            {/* Latest Roles */}
                            <div className="p-6 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-xl transition-transform hover:scale-[1.02] duration-300 card-snake">
                                <span className="snake-border"></span><span className="snake-border"></span><span className="snake-border"></span><span className="snake-border"></span>
                                <h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-3">
                                    <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                                    Latest Roles
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-lg mt-1 group-hover:scale-110 transition-transform">
                                            <FaBriefcase />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-200">Full Stack Intern</h4>
                                            <p className="text-sm text-slate-400">Inventech Info Solutions</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-lg mt-1 group-hover:scale-110 transition-transform">
                                            <FaCode />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-200">Full Stack Intern</h4>
                                            <p className="text-sm text-slate-400">Pepino Technology</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Stacks */}
                            <div className="p-4 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-xl transition-transform hover:scale-[1.02] duration-300 card-snake">
                                <span className="snake-border"></span><span className="snake-border"></span><span className="snake-border"></span><span className="snake-border"></span>
                                <h3 className="text-base font-bold text-slate-100 mb-4 flex items-center gap-3">
                                    <span className="w-1.5 h-5 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                                    Main Stacks
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex flex-col items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors group cursor-pointer">
                                        <div className="text-2xl text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                                            <FaReact />
                                        </div>
                                        <span className="text-xs font-semibold text-slate-300">Frontend</span>
                                    </div>

                                    {/* Backend - Custom Icon & No Background used to match others */}
                                    <div className="flex flex-col items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-colors group cursor-pointer">
                                        <div className="w-6 h-6 group-hover:scale-110 transition-transform duration-300">
                                            <img src={backendIcon} alt="Backend" className="w-full h-full object-contain" />
                                        </div>
                                        <span className="text-xs font-semibold text-slate-300">Backend</span>
                                    </div>

                                    <div className="flex flex-col items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors group cursor-pointer">
                                        <div className="text-2xl text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                            <FaDatabase />
                                        </div>
                                        <span className="text-xs font-semibold text-slate-300">Database</span>
                                    </div>

                                    <div className="flex flex-col items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5 hover:border-pink-500/30 transition-colors group cursor-pointer">
                                        <div className="text-2xl text-pink-400 group-hover:scale-110 transition-transform duration-300">
                                            <FaFigma />
                                        </div>
                                        <span className="text-xs font-semibold text-slate-300">UI Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
