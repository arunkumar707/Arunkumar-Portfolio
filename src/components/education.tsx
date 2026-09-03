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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationList.map((edu, i) => (
            <div key={edu.id}
              className={`card-lift surface-card relative rounded-xl border p-8 overflow-hidden reveal reveal-d${i + 2}`}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-4"
                style={{ background: 'var(--gold-gradient)', color: 'var(--deep-navy)' }}>
                🎓
              </div>
              <h3 className="font-serif font-bold text-lg mb-1" style={{ color: 'var(--navy)' }}>{edu.degree}</h3>
              <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>{edu.institution}</p>
              <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>{edu.location}</p>
              <p className="text-xs font-bold tracking-wide" style={{ color: 'var(--gold)' }}>{edu.year}</p>
              {edu.cgpa && (
                <span className="badge-success-soft inline-flex items-center mt-3 px-2 py-0.5 rounded-md border text-xs font-medium">
                  CGPA: {edu.cgpa}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
