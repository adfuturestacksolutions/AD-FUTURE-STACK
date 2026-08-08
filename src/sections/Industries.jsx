import { industries } from '../data/industries.js'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Industries() {
  return (
    <section id="industries" className="border-t border-ink-line py-24 bg-ink">
      <div className="container-page">
        <SectionHeading
          eyebrow="Domain Expertise"
          title="Industries We Empower"
          description="We bring deep vertical engineering experience across high-stakes domains with strict security, performance, and compliance needs."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className="card flex flex-col justify-between p-6 transition-all duration-300 hover:border-signal-amber/40 hover:-translate-y-1"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink/80 border border-ink-line text-2xl">
                  {ind.icon}
                </div>

                <h3 className="mt-4 text-lg font-bold text-paper">
                  {ind.title}
                </h3>
                <p className="mt-2 text-xs text-fog leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="mt-6 border-t border-ink-line/60 pt-4">
                <div className="text-[11px] font-mono font-medium text-signal-amber mb-3">
                  ⚡ {ind.metrics}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {ind.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-ink-line/50 px-2 py-0.5 text-[10px] font-mono text-fog"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
