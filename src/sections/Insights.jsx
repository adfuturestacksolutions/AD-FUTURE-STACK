import { insights } from '../data/insights.js'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Insights() {
  return (
    <section id="insights" className="border-t border-ink-line py-24 bg-ink">
      <div className="container-page">
        <SectionHeading
          eyebrow="Thought Leadership & Engineering Insights"
          title="Architectural Whitepapers & Technical Articles"
          description="In-depth analysis, system design patterns, and engineering playbooks from our core development team."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {insights.map((item) => (
            <article
              key={item.id}
              className="card flex flex-col justify-between p-6 transition-all duration-300 hover:border-signal-violet/50 hover:shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-fog">
                  <span className="font-mono text-signal-amber font-semibold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="font-mono text-[11px]">{item.readTime}</span>
                </div>

                <h3 className="mt-4 text-base font-bold text-paper group-hover:text-signal-violet transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs text-fog leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-6 border-t border-ink-line/60 pt-4 flex items-center justify-between text-[11px] text-fog">
                <span className="font-mono">{item.author}</span>
                <span className="font-mono">{item.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
