import { technologyCategories } from '../../data/technologies.js'

export default function TechStack() {
  return (
    <div className="my-16 space-y-8">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h3 className="text-2xl font-bold text-slate-900 uppercase">Technical Stack Breakdown</h3>
        <p className="text-sm text-slate-600 mt-2">Comprehensive overview of languages, frameworks, and deployment engines.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {technologyCategories.map((cat) => (
          <div key={cat.category} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md">
            <h4 className="text-xs font-mono font-bold text-violet-700 uppercase tracking-widest mb-4 pb-2 border-b border-slate-100">
              {cat.category}
            </h4>
            <ul className="space-y-3">
              {cat.items.map((item) => (
                <li key={item.name} className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-900">{item.name}</span>
                  <span className="text-xs font-mono text-violet-700 bg-violet-50 px-2 py-0.5 rounded border border-violet-100 font-bold">{item.level}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
