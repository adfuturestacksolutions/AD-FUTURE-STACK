export default function ProjectCard({ project }) {
  return (
    <article className="card overflow-hidden transition-transform hover:-translate-y-1">
      <div className="aspect-[16/10] w-full bg-gradient-to-br from-ink-surface via-ink to-ink-line" />
      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-center justify-between">
          <span className="eyebrow">{project.category}</span>
          <span className="font-mono text-xs text-fog/70">{project.year}</span>
        </div>
        <h3 className="text-lg font-semibold text-paper">{project.name}</h3>
        <p className="text-sm text-fog">{project.summary}</p>
        <ul className="flex flex-wrap gap-2 pt-2">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-full bg-ink px-3 py-1 font-mono text-[11px] text-fog">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
