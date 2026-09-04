import { lotusLarge, profile } from '@/assets/images'

const TAGS = ['MCA', 'Open to opportunities', 'Mysore', 'Karnataka, India']

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="reveal flex justify-center">
            <div className="relative">
              <div className="w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] max-w-[85vw] aspect-square rounded-full p-[3px]" style={{ background: 'var(--gold-gradient)' }}>
                <img
                  src={profile}
                  alt="Arun Kumar A N"
                  loading="lazy"
                  className="w-full h-full rounded-full object-cover object-[center_55%]"
                />
              </div>
              <img
                src={lotusLarge}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-auto object-contain"
                style={{ opacity: 0.55 }}
              />

            </div>
          </div>

          <div className="text-left sm:text-justify">
            <span className="reveal block text-xs font-bold tracking-[0.18em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
              About Me
            </span>
            <h2 className="reveal reveal-d1 font-serif font-bold leading-tight mb-4"
              style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: 'var(--navy)' }}>
              I build products from idea to production.
            </h2>
            <div className="reveal reveal-d1 gold-bar mb-6" />
            <p className="reveal reveal-d2 text-sm leading-[1.8] mb-4" style={{ color: 'var(--text-secondary)' }}>
              I{"'"}m a developer who genuinely loves taking complex, messy requirements and turning them into fast, intuitive, and reliable software. My journey started with a curiosity about how the web works behind the screen, which grew into building full-stack products from the ground up.
            </p>
            <p className="reveal reveal-d3 text-sm leading-[1.8] mb-4" style={{ color: 'var(--text-secondary)' }}>
              In my daily work, I care deeply about both sides of the application: crafting smooth, responsive user interfaces where every interaction feels snappy, and architecting clean, secure backend APIs that won{"'"}t break under load. I don{"'"}t just write code to close tickets — I focus on maintainability, performance, and real user experience.
            </p>
            <p className="reveal reveal-d3 text-sm leading-[1.8] mb-6" style={{ color: 'var(--text-secondary)' }}>
              When I{"'"}m not shipping features, I{"'"}m constantly experimenting with new tools, exploring modern system design, and building side projects to sharpen my skills.
            </p>
            <div className="reveal reveal-d4 flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <span key={t} className="chip-navy inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
