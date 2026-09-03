import { ExternalLink, Briefcase, MapPin, Calendar } from 'lucide-react'
import type { Experience as ExperienceType } from '@/types/types'
import experienceData from '@/data/experience.json'

const STACKS: Record<number, string[]> = {
  1: ['React 19', 'TypeScript', 'TanStack Query', 'NestJS', 'MySQL', 'Redis', 'MinIO', 'Expo'],
  2: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Git'],
}

export default function Experience() {
  const experiences = experienceData as ExperienceType[]

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
              className={`card-lift surface-card relative rounded-xl border p-8 overflow-hidden reveal reveal-d${Math.min(i + 2, 4)}`}>
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
                  <h3 className="font-serif font-bold text-lg mb-3" style={{ color: 'var(--navy)' }}>{exp.title}</h3>
                  <ul className="flex flex-col gap-2 mb-4">
                    {exp.description.map((b) => (
                      <li key={b} className="text-sm leading-[1.65] pl-4 relative" style={{ color: 'var(--text-secondary)' }}>
                        <span className="absolute left-0 top-[0.52em] w-[6px] h-[6px] rounded-full"
                          style={{ background: 'var(--gold-gradient)' }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {(STACKS[exp.id] ?? []).map((t) => (
                      <span key={t} className="chip-gold inline-flex items-center px-2 py-0.5 rounded-md border text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  {exp.offerLetterUrl && (
                    <a href={exp.offerLetterUrl} target="_blank" rel="noopener noreferrer"
                      className="link-gold inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded border transition-colors duration-150">
                      <ExternalLink size={10} strokeWidth={2} /> View Offer Letter
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
