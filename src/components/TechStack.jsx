import { technologies } from '../data/technologies.js'

export default function TechStack() {
  const layers = Object.entries(technologies)

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {layers.map(([layer, tools], index) => (
        <div key={layer} className="card p-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="font-mono text-xs text-fog/60">0{index + 1}</span>
            <span className="eyebrow">{layer}</span>
          </div>
          <ul className="space-y-2">
            {tools.map((tool) => (
              <li key={tool} className="text-sm text-paper/90">
                {tool}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
