import { useState, useEffect } from 'react'
import { ExternalLink, Briefcase, MapPin, Calendar, FileText, X } from 'lucide-react'
import type { Experience as ExperienceType } from '@/types/types'
import experienceData from '@/data/experience.json'

const STACKS: Record<number, string[]> = {
  1: ['React 19', 'TypeScript', 'TanStack Query', 'NestJS', 'MySQL', 'Redis', 'MinIO', 'Expo'],
  2: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Git'],
}

export default function Experience() {
  const experiences = experienceData as ExperienceType[]
  const [activeLetter, setActiveLetter] = useState<{ url: string; title: string; company: string } | null>(null)

  useEffect(() => {
    if (!activeLetter) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveLetter(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeLetter])

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <span className="reveal block text-xs font-bold tracking-[0.18em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          Work Experience
        </span>
        <h2 className="reveal reveal-d1 font-serif font-bold leading-tight mb-4"
          style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: 'var(--navy)' }}>
          Where I have worked
        </h2>
        <div className="reveal reveal-d1 gold-bar mb-12" />

        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <div key={exp.id}
              className={`card-lift surface-card relative rounded-xl border p-6 sm:p-8 overflow-hidden reveal reveal-d${Math.min(i + 2, 4)}`}>
              {exp.offerLetterUrl && (
                <button
                  type="button"
                  onClick={() => setActiveLetter({ url: exp.offerLetterUrl!, title: exp.title, company: exp.company })}
                  className="link-gold absolute top-5 right-5 sm:top-6 sm:right-6 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md border transition-all duration-150 bg-white/70 backdrop-blur-sm z-10 shadow-xs hover:bg-white cursor-pointer"
                >
                  <FileText size={12} strokeWidth={2} /> View Offer Letter
                </button>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase"
                    style={{ color: 'var(--gold)' }}>
                    <Calendar size={12} strokeWidth={2} />
                    {exp.startDate} — {exp.endDate}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                    <Briefcase size={12} strokeWidth={1.8} />{exp.company}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <MapPin size={12} strokeWidth={1.8} />{exp.location}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-3 pr-36 sm:pr-40" style={{ color: 'var(--navy)' }}>{exp.title}</h3>
                  <ul className="flex flex-col gap-2 mb-4">
                    {exp.description.map((b) => (
                      <li key={b} className="text-sm leading-[1.65] pl-4 relative" style={{ color: 'var(--text-secondary)' }}>
                        <span className="absolute left-0 top-[0.52em] w-[6px] h-[6px] rounded-full"
                          style={{ background: 'var(--gold-gradient)' }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {(STACKS[exp.id] ?? []).map((t) => (
                      <span key={t} className="chip-gold inline-flex items-center px-2 py-0.5 rounded-md border text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Offer Letter Modal */}
      {activeLetter && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveLetter(null)}
        >
          {/* Backdrop with dark blur */}
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity" />

          {/* Modal Card */}
          <div
            className="relative z-10 w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl border bg-white"
            style={{ borderColor: 'var(--border)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-4 border-b select-none"
              style={{ background: 'var(--warm-white)', borderColor: 'var(--border)' }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center border"
                  style={{ background: 'color-mix(in srgb, var(--gold) 12%, transparent)', borderColor: 'color-mix(in srgb, var(--gold) 28%, transparent)' }}
                >
                  <FileText size={18} style={{ color: 'var(--gold)' }} />
                </div>
                <div>
                  <div className="font-serif font-bold text-sm sm:text-base leading-tight" style={{ color: 'var(--navy)' }}>
                    {activeLetter.company}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    {activeLetter.title} · Offer Letter
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeLetter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open in new tab"
                  className="p-2 rounded-lg border text-xs font-medium transition-colors hover:bg-slate-100"
                  style={{ color: 'var(--text-secondary)', borderColor: 'var(--border)' }}
                  title="Open original in new tab"
                >
                  <ExternalLink size={15} />
                </a>
                <button
                  type="button"
                  onClick={() => setActiveLetter(null)}
                  aria-label="Close modal"
                  className="p-2 rounded-lg border text-xs font-semibold transition-colors hover:bg-slate-100 cursor-pointer"
                  style={{ color: 'var(--navy)', borderColor: 'var(--border)' }}
                >
                  <X size={16} strokeWidth={2.2} />
                </button>
              </div>
            </div>

            {/* Document Preview Body */}
            <div className="overflow-y-auto p-4 sm:p-6 flex items-center justify-center bg-slate-900/5 min-h-[300px]">
              <div className="relative rounded-lg overflow-hidden shadow-lg border bg-white max-w-full" style={{ borderColor: 'var(--border)' }}>
                <img
                  src={activeLetter.url}
                  alt={`${activeLetter.company} Offer Letter`}
                  className="w-auto max-h-[68vh] object-contain select-none"
                  loading="eager"
                />
              </div>
            </div>

            {/* Footer */}
            <div
              className="flex items-center justify-between px-6 py-3 border-t text-xs"
              style={{ background: 'var(--warm-white)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}
            >
              <span>Verified Employment Document</span>
              <button
                type="button"
                onClick={() => setActiveLetter(null)}
                className="px-4 py-1.5 rounded-md font-semibold text-xs transition-colors cursor-pointer"
                style={{ background: 'var(--navy)', color: '#fff' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
