import { Mail, Download, ArrowRight } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { lotusLarge, registerBg } from '@/assets/images'
import type { HeroBgStyle, SocialLinkItem, StatItem } from '@/types/types'

const SOCIALS: SocialLinkItem[] = [
  { href: 'https://github.com/arunkumar707',                       label: 'GitHub'   },
  { href: 'https://www.linkedin.com/in/arun-kumar-a-n-2a89192b4/', label: 'LinkedIn' },
  { href: 'mailto:arunkumar.a.n707@gmail.com',                      label: 'Email'    },
]

const STATS: StatItem[] = [
  { num: '6',   label: 'Real-time Enterprise Apps' },
  { num: '6',   label: 'Self-Built & Deployed' },
  { num: '2+',  label: 'Years Experience' },
  { num: '10+', label: 'Tech Stack Depth' },
]

export default function Hero() {
  const heroBgStyle: HeroBgStyle = { '--hero-photo': `url(${registerBg})` }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="hero-bg" aria-hidden="true" style={heroBgStyle} />
      <img src={lotusLarge} alt="" aria-hidden="true" loading="lazy"
        className="absolute right-[6%] bottom-[12%] w-[180px] md:w-[260px] h-auto object-contain pointer-events-none select-none"
        style={{ opacity: 0.1, filter: 'brightness(2) saturate(0.3)' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full pt-20">
        <div className="max-w-2xl">

          <h1 className="reveal reveal-d1 font-serif font-bold leading-[1.06] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,5.5rem)', color: 'var(--cream)', letterSpacing: '-0.02em' }}>
            Building products that{' '}
            <em className="italic" style={{ color: 'var(--light-gold)' }}>actually</em> ship.
          </h1>
          <p className="reveal reveal-d2 leading-[1.8] mb-10 text-on-navy"
            style={{ fontSize: 'clamp(0.95rem,1.8vw,1.15rem)', maxWidth: '580px' }}>
            I{"'"}m <strong className="text-on-navy-strong" style={{ fontWeight: 600 }}>Arun Kumar A N</strong> — a full-stack
            developer at Inventech, building real-time enterprise and government
            applications that are used in the real world. I{"'"}ve worked on 6 production projects and
            built 6 full-stack projects from scratch, deploying and managing them on my own servers.
          </p>
          <div className="reveal reveal-d3 flex flex-wrap items-center gap-4 mb-16">
            <a href="/resume.pdf" download="Arun_Kumar_AN_FullStack.pdf"
              className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3"
              style={{ background: 'linear-gradient(135deg, var(--gold), var(--cream))', color: 'var(--deep-navy)', borderRadius: '6px' }}>
              <Download size={14} strokeWidth={2.5} /> Download Resume
            </a>
            <button data-no-lift
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="hero-ghost-btn inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 border transition-all duration-150"
              style={{ borderRadius: '6px' }}>
              See My Work <ArrowRight size={14} strokeWidth={2} />
            </button>
          </div>
          <div className="reveal reveal-d4 flex items-center pt-8 border-t border-on-navy-soft">
            {STATS.map((s, i) => (
              <div key={s.label} className="flex items-center">
                {i > 0 && <span className="w-px h-9 mx-8 divide-on-navy" />}
                <div>
                  <div className="font-serif font-bold" style={{ fontSize: '2rem', color: 'var(--light-gold)', lineHeight: 1 }}>{s.num}</div>
                  <div className="text-xs font-medium mt-1 tracking-wide text-on-navy-muted">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-4">
        {SOCIALS.map((s) => (
          <a key={s.label} href={s.href} aria-label={s.label} target={s.label === 'Email' ? undefined : '_blank'} rel="noopener noreferrer"
            className="social-ghost w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-150">
            {s.label === 'GitHub' && <FaGithub size={14} />}
            {s.label === 'LinkedIn' && <FaLinkedin size={14} />}
            {s.label === 'Email' && <Mail size={14} strokeWidth={1.8} />}
          </a>
        ))}
      </div>

      {/* Decorative Gold Seal — right center */}
      <div className="hero-seal absolute hidden lg:flex items-center justify-center"
        style={{ right: '15%', top: '50%', transform: 'translateY(-50%)', width: 300, height: 300, zIndex: 5 }}>
        {/* Outer spinning ring with text */}
        <svg className="hero-seal-ring absolute inset-0" viewBox="0 0 300 300" width="300" height="300">
          <defs>
            {/* Full clockwise circle starting from bottom (6 o'clock) */}
            <path id="seal-ring" d="M 150,256 a 106,106 0 1,1 0,-212 a 106,106 0 1,1 0,212" />
          </defs>
          {/* FULL STACK DEVELOPER — centered at top */}
          <text style={{ fill: 'var(--light-gold)', fontSize: '12px', fontFamily: 'Inter, sans-serif', fontWeight: 600, letterSpacing: '4.5px' }}>
            <textPath href="#seal-ring" textAnchor="middle" startOffset="25%">FULL STACK DEVELOPER</textPath>
          </text>
          {/* ARUN KUMAR A N — centered at bottom */}
          <text style={{ fill: 'var(--light-gold)', fontSize: '12px', fontFamily: 'Inter, sans-serif', fontWeight: 600, letterSpacing: '4.5px' }}>
            <textPath href="#seal-ring" textAnchor="middle" startOffset="75%">ARUN KUMAR A N</textPath>
          </text>

          {/* Inner decorative rings */}
          <circle cx="150" cy="150" r="122" fill="none" stroke="var(--light-gold)" strokeWidth="0.8" strokeDasharray="5 4" opacity="0.4" />
          <circle cx="150" cy="150" r="92"  fill="none" stroke="var(--light-gold)" strokeWidth="0.5" opacity="0.2" />
        </svg>
        {/* Center monogram */}
        <div className="relative flex flex-col items-center justify-center"
          style={{ width: 158, height: 158, borderRadius: '50%', border: '1.5px solid', borderColor: 'color-mix(in srgb, var(--light-gold) 50%, transparent)', background: 'transparent' }}>
          <span className="font-serif font-bold" style={{ fontSize: '3.2rem', lineHeight: 1, color: 'var(--light-gold)', letterSpacing: '-0.02em' }}>AK</span>
          <span style={{ fontSize: '0.58rem', letterSpacing: '0.24em', color: 'color-mix(in srgb, var(--cream) 55%, transparent)', textTransform: 'uppercase', marginTop: 6 }}>est. 2002</span>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2 text-on-navy-faint"
        style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        <div className="scroll-line" /><span>Scroll</span>
      </div>
    </section>
  )
}
