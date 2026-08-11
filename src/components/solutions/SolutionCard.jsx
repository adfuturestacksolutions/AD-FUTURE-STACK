import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SolutionCard({ solution }) {
  return (
    <div className="bg-white rounded-3xl p-8 flex flex-col justify-between border border-slate-200 shadow-md hover:border-violet-500/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
      {solution.badge && (
        <div className="absolute top-6 right-6">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-violet-700 bg-violet-50 border border-violet-200 px-3 py-1 rounded-full">
            {solution.badge}
          </span>
        </div>
      )}

      <div>
        <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">Blueprint</span>
        <h3 className="text-2xl font-bold text-slate-900 mb-1">{solution.title}</h3>
        <span className="text-sm font-bold text-violet-600 block mb-4">{solution.subtitle}</span>
        <p className="text-xs text-slate-600 leading-relaxed mb-6">{solution.description}</p>

        <div className="space-y-3 mb-8 pt-4 border-t border-slate-100">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-2">Included Modules</span>
          {solution.features.map((feat) => (
            <div key={feat} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
              <CheckCircle2 className="h-4 w-4 text-violet-600 shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <Link
        to="/contact"
        className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 hover:bg-violet-600 hover:border-violet-600 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all"
      >
        <span>Deploy Architecture</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
