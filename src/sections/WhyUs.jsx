const REASONS = [
  {
    title: 'Senior engineers only',
    description: 'No junior devs learning on your budget. Every engagement is staffed by people who\u2019ve shipped this before.',
  },
  {
    title: 'Fixed-scope sprints',
    description: 'Two-week cycles with a clear deliverable each time, so you always know what\u2019s next.',
  },
  {
    title: 'You own the code',
    description: 'No vendor lock-in. Every repository, credential, and doc transfers to your team at handoff.',
  },
]

export default function WhyUs() {
  return (
    <section className="border-t border-ink-line py-24">
      <div className="container-page grid gap-10 md:grid-cols-3">
        {REASONS.map((reason) => (
          <div key={reason.title} className="flex flex-col gap-3">
            <div className="h-px w-10 bg-signal-amber" />
            <h3 className="text-lg font-semibold text-paper">{reason.title}</h3>
            <p className="text-sm text-fog">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
