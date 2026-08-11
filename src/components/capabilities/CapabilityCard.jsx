import { Code, Cloud, Cpu, Smartphone } from 'lucide-react'

const iconMap = {
  Code: <Code className="h-6 w-6 text-violet-600" />,
  Cloud: <Cloud className="h-6 w-6 text-violet-600" />,
  Cpu: <Cpu className="h-6 w-6 text-violet-600" />,
  Smartphone: <Smartphone className="h-6 w-6 text-violet-600" />
}

export default function CapabilityCard({ capability }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md hover:border-violet-500/50 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="h-12 w-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center">
          {iconMap[capability.iconName] || <Code className="h-6 w-6 text-violet-600" />}
        </div>
        <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-violet-700 bg-violet-50 border border-violet-200 px-2.5 py-1 rounded">
          {capability.category}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-3">{capability.title}</h3>
      <p className="text-xs text-slate-600 leading-relaxed mb-6">{capability.description}</p>

      <div className="pt-4 border-t border-slate-100">
        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-2">Technologies</span>
        <div className="flex flex-wrap gap-2">
          {capability.technologies.map((tech) => (
            <span key={tech} className="text-xs font-mono bg-slate-50 border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
