import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0, rootMargin: "-50% 0px -50% 0px" }
        );

        const ids = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
        ids.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' },
    ];

    const getLinkClasses = (itemId) => {
        const isActive = activeSection === itemId;
        const baseClasses = "px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full border border-transparent";
        const activeClasses = "bg-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.3)] border-white/20 scale-105";
        const inactiveClasses = "text-slate-300 hover:text-white hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:border-white/10";

        return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
    };

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav
                className={`
                    transition-all duration-300 ease-in-out
                    ${scrolled
                        ? 'py-2 bg-white/10 backdrop-blur-md border-white/20 shadow-[0_8px_32px_rgba(31,38,135,0.37)]'
                        : 'py-3 bg-slate-800/40 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
                    }
                    px-4 pr-3
                    border
                    rounded-full
                    hover:shadow-[0_8px_32px_rgba(6,182,212,0.15)]
                    flex items-center gap-4 md:gap-8
                    max-w-7xl w-full md:w-auto justify-between md:justify-start
                `}
            >
                {/* Logo Section */}
                <button
                    onClick={() => scrollToSection('hero')}
                    className="flex items-center gap-3 group"
                >
                    <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white rounded-full hover:scale-105 transition-transform duration-300 shadow-lg text-slate-900 font-bold text-lg md:text-xl tracking-tighter shrink-0">
                        AK
                    </div>
                    <span className="hidden md:block text-white font-bold text-lg tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">Arun Kumar A N</span>
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={getLinkClasses(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Right Side - Contact & Mobile Toggle */}
                <div className="flex items-center gap-2 shrink-0">
                    {/* Contact Button */}
                    {/* Contact Button */}
                    <a
                        href="https://wa.me/919632796199?text=hi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hidden md:block px-6 py-2.5 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-md ${activeSection === 'contact' ? 'bg-gradient-to-r from-purple-500 to-blue-500 scale-105 shadow-purple-500/50' : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-purple-500 hover:to-blue-500 hover:shadow-purple-500/50 hover:scale-105 active:scale-95'}`}
                    >
                        Let's Talk
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-slate-300 hover:text-white transition-colors text-xl"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Dropdown */}
            {isMobileMenuOpen && (
                <div className="absolute top-full mt-2 left-4 right-4 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-4 shadow-2xl animate-slide-down md:hidden flex flex-col gap-2">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium ${activeSection === item.id ? 'text-white bg-white/20' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}
                        >
                            {item.label}
                        </button>
                    ))}
                    <a
                        href="https://wa.me/919632796199?text=hi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl text-center shadow-lg transform active:scale-95 transition-all block"
                    >
                        Let's Talk
                    </a>
                </div>
            )}
        </div>
    );
};

export default Navbar;
