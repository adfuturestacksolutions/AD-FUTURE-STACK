import { testimonials } from '../data/testimonials.js'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Testimonials() {
  return (
    <section className="border-t border-ink-line bg-ink-surface/40 py-24">
      <div className="container-page">
        <SectionHeading eyebrow="What clients say" title="Trusted by teams who ship" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.id} className="card flex flex-col gap-5 p-7">
              <blockquote className="text-sm leading-relaxed text-paper/90">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-auto text-sm">
                <span className="font-medium text-paper">{t.name}</span>
                <span className="block text-fog">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
