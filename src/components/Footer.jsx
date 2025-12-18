import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex justify-center py-6">
            <footer className="
                bg-slate-800/40 backdrop-blur-xl border border-white/10 
                shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                px-6 py-3
                rounded-full
                hover:shadow-[0_8px_32px_rgba(6,182,212,0.15)]
                transition-all duration-300
                flex flex-col md:flex-row items-center gap-4 md:gap-8
            ">
                {/* Copyright */}
                <p className="text-slate-400 text-sm font-medium">
                    Designed and Developed by Arun kumar A N 2025
                </p>

                {/* Social Links */}
                <div className="flex gap-4">
                    <a
                        href="https://github.com/arunkumar707"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors text-lg"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/arun-kumar-a-n-2a89192b4/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors text-lg"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:arunkumar.a.n707@gmail.com"
                        className="text-slate-400 hover:text-white transition-colors text-lg"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
