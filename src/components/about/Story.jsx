import { CheckCircle2, Layout, Network } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Story() {
  return (
    <div className="my-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* LEFT: Collage Images + Violet Stat Box */}
      <div className="lg:col-span-6 relative">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-72">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="IT Professionals Team"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-72 mt-8">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
              alt="Software Engineering Meeting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Floating Stat Badge Matching Reference */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-600 text-white rounded-2xl p-6 shadow-2xl z-20 border border-violet-400/30 text-center min-w-[200px]">
          <span className="text-4xl font-extrabold block">6800<sup className="text-2xl">+</sup></span>
          <span className="text-xs font-bold uppercase tracking-wider text-violet-200 mt-1 block">Satisfied Clients</span>
        </div>
      </div>

      {/* RIGHT: Content & Features */}
      <div className="lg:col-span-6 space-y-6">
        <div className="flex items-center gap-2">
          <span className="h-0.5 w-6 bg-violet-600"></span>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-600">About Your Company</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
          We’re Partner of Your Innovations
        </h2>

        <p className="text-sm text-slate-600 leading-relaxed">
          Infetech & AD FutureStack is a premier provider of IT consulting and software development services. We have helped organizations and companies improve business performance & enhance their competitiveness.
        </p>

        {/* Feature Icons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-violet-50/60 border border-violet-100">
            <div className="h-10 w-10 rounded-lg bg-violet-600 text-white flex items-center justify-center shrink-0">
              <Layout className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Website Development</h4>
              <p className="text-xs text-slate-500 mt-0.5">High performance custom platforms.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-violet-50/60 border border-violet-100">
            <div className="h-10 w-10 rounded-lg bg-violet-600 text-white flex items-center justify-center shrink-0">
              <Network className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Internal Networking</h4>
              <p className="text-xs text-slate-500 mt-0.5">Secure cloud infrastructure.</p>
            </div>
          </div>
        </div>

        {/* Bullet points */}
        <div className="space-y-2.5 pt-2">
          <div className="flex items-center gap-3 text-xs font-semibold text-slate-700">
            <CheckCircle2 className="h-4 w-4 text-violet-600 shrink-0" />
            <span>Bringing new IT solutions to the market</span>
          </div>
          <div className="flex items-center gap-3 text-xs font-semibold text-slate-700">
            <CheckCircle2 className="h-4 w-4 text-violet-600 shrink-0" />
            <span>To be included in the list of the best 100 IT companies</span>
          </div>
          <div className="flex items-center gap-3 text-xs font-semibold text-slate-700">
            <CheckCircle2 className="h-4 w-4 text-violet-600 shrink-0" />
            <span>Our company has 300+ IT senior professionals</span>
          </div>
        </div>

        <div className="pt-4">
          <Link
            to="/about"
            className="inline-flex items-center justify-center bg-violet-600 text-white font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-md hover:bg-violet-700 transition-all shadow-md"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  )
}
