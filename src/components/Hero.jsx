import React, { useState } from 'react';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaEye, FaEyeSlash, FaPaperPlane } from 'react-icons/fa';

const Hero = () => {

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
                <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 pt-48 pb-20 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Greeting */}
                    <div className="mb-6 animate-fade-in">
                        <span className="text-cyan-400 text-lg font-semibold tracking-wide">
                            Hello, I'm
                        </span>
                    </div>

                    {/* Name */}
                    {/* Name */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                            Arun Kumar A N
                        </span>
                    </h1>

                    {/* Role */}
                    <h2 className="text-2xl md:text-4xl font-semibold text-[#C8D0CC] mb-8 animate-slide-up delay-100">
                        Full Stack Developer
                    </h2>

                    {/* Tagline */}
                    <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up delay-200">
                        Building scalable and user-friendly web applications with React & Node.js.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center mb-12 animate-slide-up delay-300">
                        <a
                            href="/resume.pdf"
                            download="Arun_Kumar_Full_Stack_Developer.pdf"
                            className="btn-primary group"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <FaDownload className="group-hover:animate-giggle" />
                                Download Resume
                            </span>
                        </a>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="btn-secondary flex items-center gap-2 group"
                        >
                            <FaEye className="group-hover:animate-giggle" />
                            View Projects
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-secondary flex items-center gap-2 group"
                        >
                            <FaPaperPlane className="group-hover:animate-giggle" />
                            Contact Me
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6 justify-center animate-slide-up delay-400">
                        <a
                            href="https://github.com/arunkumar707"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-cyan-400 transition-all duration-300 text-3xl hover:-translate-y-2 hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] hover:animate-giggle"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/arun-kumar-a-n-2a89192b4/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-cyan-400 transition-all duration-300 text-3xl hover:-translate-y-2 hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] hover:animate-giggle"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="mailto:arunkumar.a.n707@gmail.com"
                            className="text-slate-400 hover:text-cyan-400 transition-all duration-300 text-3xl hover:-translate-y-2 hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] hover:animate-giggle"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
