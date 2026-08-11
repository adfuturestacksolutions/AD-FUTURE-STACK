import { Cpu, Code, ShieldCheck, Cloud, Layers, Smartphone } from 'lucide-react'

const iconMap = {
  'product-engineering': <Code className="h-5 w-5" />,
  'backend-apis': <Layers className="h-5 w-5" />,
  'mobile-engineering': <Smartphone className="h-5 w-5" />,
  'ai-automation': <Cpu className="h-5 w-5" />,
  'infrastructure': <Cloud className="h-5 w-5" />,
  'cyber-security': <ShieldCheck className="h-5 w-5" />
}

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300">
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Purple Icon Badge overlapping bottom right of image */}
        <div className="absolute bottom-4 right-4 h-12 w-12 rounded-xl bg-violet-600 text-white flex items-center justify-center shadow-lg border-2 border-white">
          {iconMap[service.id] || <Cpu className="h-5 w-5" />}
        </div>
      </div>

      <div className="p-6 space-y-3">
        <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-violet-600 block">
          {service.layer}
        </span>
        <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-violet-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
          {service.description}
        </p>
      </div>

      <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Enterprise Ready</span>
        <span className="text-xs font-bold text-violet-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
          Explore &rarr;
        </span>
      </div>
    </div>
  )
}
