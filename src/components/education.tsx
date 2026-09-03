import { GraduationCap, Building2, MapPin, Calendar, Award } from 'lucide-react'
import type { Education as EducationType } from '@/types/types'
import educationData from '@/data/education.json'

export default function Education() {
  const educationList = educationData as EducationType[]

  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <span className="reveal block text-xs font-bold tracking-[0.18em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
          Education
        </span>
        <h2 className="reveal reveal-d1 font-serif font-bold leading-tight mb-4"
          style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: 'var(--navy)' }}>
          Academic background
        </h2>
        <div className="reveal reveal-d1 gold-bar mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu, i) => (
            <div
              key={edu.id}
              className={`card-lift surface-card relative rounded-2xl border p-7 sm:p-8 flex flex-col justify-between overflow-hidden reveal reveal-d${i + 2}`}
            >
              <div>
                {/* Header Row: Icon + Year pill */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-xs"
                    style={{
                      background: 'color-mix(in srgb, var(--gold) 12%, transparent)',
                      borderColor: 'color-mix(in srgb, var(--gold) 28%, transparent)',
                      color: 'var(--gold)',
                    }}
                  >
                    <GraduationCap size={22} strokeWidth={2} />
                  </div>
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border"
                    style={{
                      background: 'color-mix(in srgb, var(--cream) 60%, transparent)',
                      borderColor: 'var(--border)',
                      color: 'var(--navy)',
                    }}
                  >
                    <Calendar size={12} strokeWidth={2} style={{ color: 'var(--gold)' }} />
                    {edu.year}
                  </div>
                </div>

                {/* Degree Title */}
                <h3 className="font-serif font-bold text-xl leading-snug mb-3" style={{ color: 'var(--navy)' }}>
                  {edu.degree}
                </h3>

                {/* Institution & Location */}
                <div className="flex flex-col gap-1.5 mb-5">
                  <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    <Building2 size={14} strokeWidth={1.8} style={{ color: 'var(--gold)' }} />
                    {edu.institution}
                  </div>
                  <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <MapPin size={13} strokeWidth={1.8} />
                    {edu.location}, Karnataka
                  </div>
                </div>

                {/* Description */}
                {edu.description && (
                  <p className="text-sm leading-[1.7] mb-6" style={{ color: 'var(--text-secondary)' }}>
                    {edu.description}
                  </p>
                )}
              </div>

              {/* Bottom Row: Score / Achievement */}
              {edu.cgpa && (
                <div
                  className="pt-4 border-t flex items-center justify-between text-xs"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                    Academic Performance
                  </span>
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border font-bold text-xs"
                    style={{
                      background: 'color-mix(in srgb, var(--success) 10%, transparent)',
                      borderColor: 'color-mix(in srgb, var(--success) 28%, transparent)',
                      color: 'var(--success)',
                    }}
                  >
                    <Award size={13} strokeWidth={2.2} />
                    <span>CGPA: {edu.cgpa} / 10</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
