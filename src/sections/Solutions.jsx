import { solutions } from '../data/solutions.js'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Solutions() {
  return (
    <section id="solutions" className="border-t border-ink-line py-24 bg-ink-surface/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Targeted Platform Solutions"
          title="Engineered Solutions Built for Scale"
          description="Tailored technology blueprints designed to solve specific operational, architectural, and speed-to-market challenges."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="card relative flex flex-col justify-between p-8 transition-all duration-300 hover:border-signal-violet/50 hover:shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="rounded-full bg-signal-violet/10 border border-signal-violet/20 px-3 py-1 text-xs font-semibold text-signal-violet">
                    {item.badge}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-paper group-hover:text-signal-violet transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-mono font-semibold uppercase tracking-wider text-signal-amber">
                  {item.tagline}
                </p>
                <p className="mt-3 text-sm text-fog leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6 border-t border-ink-line/80 pt-4">
                  <p className="text-xs font-mono font-medium text-paper/80 uppercase tracking-widest mb-3">
                    Deliverables & Standards:
                  </p>
                  <ul className="space-y-2">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-fog">
                        <span className="h-1.5 w-1.5 rounded-full bg-signal-violet" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-ink-line/40">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    const el = document.getElementById('contact')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-paper group-hover:text-signal-violet transition-colors"
                >
                  Consult on this Solution &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
