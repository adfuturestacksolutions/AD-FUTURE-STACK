import { SITE_NAME } from '../utils/constants.js'

export default function About() {
  return (
    <section id="about" className="border-t border-ink-line py-24 bg-ink-surface/30">
      <div className="container-page grid gap-12 md:grid-cols-2 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-signal-amber/30 bg-signal-amber/10 px-4 py-1.5 w-fit mb-4">
            <span className="eyebrow text-[11px] font-bold tracking-widest text-signal-amber">
              About {SITE_NAME}
            </span>
          </div>
          <h2 className="text-3xl font-extrabold md:text-4xl text-paper tracking-tight leading-snug">
            Senior Engineering Studio Shipping Enterprise Stacks
          </h2>
          <p className="mt-4 text-sm text-fog leading-relaxed">
            {SITE_NAME} was founded by senior engineers who believe product velocity requires unified ownership across frontend, backend, data, and cloud infrastructure.
          </p>
        </div>

        <div className="flex flex-col gap-6 text-fog text-sm">
          <div className="card p-6 border-ink-line/80 bg-ink-surface">
            <h3 className="text-base font-bold text-paper mb-2">🎯 Our Mission</h3>
            <p className="leading-relaxed">
              We eliminate friction between design handoffs and robust backend execution, building scalable architectures engineered for long-term product maintainability.
            </p>
          </div>

          <div className="card p-6 border-ink-line/80 bg-ink-surface">
            <h3 className="text-base font-bold text-paper mb-2">🛠️ Full Ownership & Hand-Off</h3>
            <p className="leading-relaxed">
              Every project comes with full staging setups, automated CI/CD pipelines, clear documentation, and standard hand-offs so your in-house team truly owns the codebase.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
