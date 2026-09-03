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
  { num: '6',   label: 'Production apps' },
  { num: '2+',  label: 'Years experience' },
  { num: '10+', label: 'Tech stack depth' },
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
          <div className="reveal flex items-center gap-3 mb-6">
            <span className="block w-7 h-px flex-shrink-0" style={{ background: 'var(--gold-gradient)' }} />
            <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: 'var(--light-gold)' }}>
              Full Stack Developer · React · NestJS
            </span>
          </div>
          <h1 className="reveal reveal-d1 font-serif font-bold leading-[1.06] mb-6"
            style={{ fontSize: 'clamp(3rem,7vw,5.5rem)', color: 'var(--cream)', letterSpacing: '-0.02em' }}>
            Building products that{' '}
            <em className="italic" style={{ color: 'var(--light-gold)' }}>actually</em> ship.
          </h1>
          <p className="reveal reveal-d2 leading-[1.8] mb-10 text-on-navy"
            style={{ fontSize: 'clamp(0.95rem,1.8vw,1.15rem)', maxWidth: '520px' }}>
            I{"'"}m <strong className="text-on-navy-strong" style={{ fontWeight: 600 }}>Arun Kumar A N</strong> — a full stack
            developer who shipped 6 real government and enterprise apps at Inventech. React frontends, NestJS APIs, JWT auth,
            MySQL — all production code.
          </p>
          <div className="reveal reveal-d3 flex flex-wrap items-center gap-4 mb-16">
            <a href="/resume.pdf" download="Arun_Kumar_AN_FullStack.pdf"
              className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full"
              style={{ background: 'var(--gold-gradient)', color: 'var(--deep-navy)' }}>
              <Download size={14} strokeWidth={2.5} /> Download Resume
            </a>
            <button data-no-lift
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="hero-ghost-btn inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full border transition-all duration-150">
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-on-navy-faint"
        style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        <div className="scroll-line" /><span>Scroll</span>
      </div>
    </section>
  )
}
