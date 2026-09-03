import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa'
import { CONTACT_WHATSAPP_URL } from '@/features/contact'

interface NavItem {
  id: string
  label: string
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0, rootMargin: '-40% 0px -40% 0px' }
    )

    const ids = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact']
    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMobileMenuOpen(false)
    }
  }

  const getLinkClasses = (itemId: string) => {
    const isActive = activeSection === itemId
    const baseClasses = 'px-4 lg:px-5 py-2 text-xs lg:text-sm font-medium transition-all duration-300 rounded-full border border-transparent cursor-pointer bg-transparent'
    const activeClasses = 'bg-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.3)] border-white/20 scale-105'
    const inactiveClasses = 'text-slate-300 hover:text-white hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:border-white/10'

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
  }

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={`
          pointer-events-auto
          transition-all duration-300 ease-in-out
          ${scrolled
            ? 'py-2 bg-slate-900/80 backdrop-blur-xl border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.45)]'
            : 'py-2.5 bg-slate-900/60 backdrop-blur-xl border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.35)]'
          }
          px-4 pr-3
          border
          rounded-full
          hover:shadow-[0_8px_32px_rgba(214,168,79,0.2)]
          flex items-center gap-3 md:gap-6
          max-w-7xl w-full md:w-auto justify-between md:justify-start
        `}
      >
        {/* Logo Section */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 group bg-transparent border-none cursor-pointer p-0"
        >
          <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-white rounded-full hover:scale-105 transition-transform duration-300 shadow-lg text-slate-900 font-bold text-base md:text-lg tracking-tighter shrink-0">
            AK
          </div>
          <span className="hidden md:block text-white font-bold text-base md:text-lg tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:to-yellow-500 transition-all duration-300">
            Arun Kumar A N
          </span>
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
          <a
            href={CONTACT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden md:flex items-center gap-2 pl-4 pr-1.5 py-1.5 text-xs font-bold rounded-full transition-all duration-300 shadow-md hover:scale-105 active:scale-95 hover:shadow-green-500/30"
            style={{ background: 'linear-gradient(90deg, #25D366 30%, #ffffff 100%)' }}
          >
            <span className="text-white tracking-wide">Let{"'"}s Chat</span>
            <div className="bg-white rounded-full p-1 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:drop-shadow-xl">
              <FaWhatsapp className="text-sm text-[#25D366]" />
            </div>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors text-xl bg-transparent border-none cursor-pointer"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto absolute top-full mt-2 left-4 right-4 bg-slate-900/95 backdrop-blur-2xl rounded-2xl border border-slate-700/60 p-5 shadow-2xl animate-slide-down md:hidden flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium border-none cursor-pointer ${
                activeSection === item.id ? 'text-white bg-white/20' : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href={CONTACT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-xl text-center shadow-lg transform active:scale-95 transition-all block"
          >
            Let{"'"}s Chat
          </a>
        </div>
      )}
    </div>
  )
}

