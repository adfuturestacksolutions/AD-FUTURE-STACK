import { Layers, ShieldCheck, Zap, Database } from 'lucide-react'

const principles = [
  {
    title: 'Zero Trust Security',
    icon: ShieldCheck,
    description: 'Strict authentication, encrypted payloads at rest and in transit, and role-restricted microservices.'
  },
  {
    title: 'Sub-100ms Edge Latency',
    icon: Zap,
    description: 'Edge CDN routing, Redis cache warming, and optimized client bundles for instant interaction.'
  },
  {
    title: 'Decoupled Microservices',
    icon: Layers,
    description: 'Independent containerized deployment units that prevent single points of failure.'
  },
  {
    title: 'ACID & Eventual Consistency',
    icon: Database,
    description: 'PostgreSQL relational schemas combined with high-throughput event buses for async jobs.'
  }
]

export default function Architecture() {
  return (
    <div className="my-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h3 className="text-3xl font-extrabold text-slate-900 uppercase">Architectural Principles</h3>
        <p className="text-slate-600 mt-2">How we guarantee scalability and zero downtime across enterprise installations.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {principles.map((p) => {
          const Icon = p.icon
          return (
            <div key={p.title} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:border-violet-500/50 hover:shadow-xl transition-all">
              <div className="h-10 w-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
