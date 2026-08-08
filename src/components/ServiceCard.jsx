export default function ServiceCard({ service }) {
  return (
    <div className="card group flex flex-col gap-5 p-7 transition-colors hover:border-signal-violet/60">
      <span className="eyebrow">{service.layer}</span>
      <h3 className="text-xl font-semibold text-paper">{service.title}</h3>
      <p className="text-sm leading-relaxed text-fog">{service.description}</p>
      <ul className="mt-auto flex flex-wrap gap-2 pt-2">
        {service.deliverables.map((item) => (
          <li
            key={item}
            className="rounded-full border border-ink-line px-3 py-1 font-mono text-[11px] text-fog group-hover:border-signal-violet/40"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
