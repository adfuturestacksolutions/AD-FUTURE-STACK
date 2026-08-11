import Container from '../common/Container.jsx'
import Button from '../common/Button.jsx'

export default function HomeCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/80 border border-violet-700/60 text-xs font-mono font-bold text-violet-300 uppercase">
            <span>Ready To Scale?</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight">
            Ready to Build Your <span className="#2563EB ">Next-Gen Stack?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Schedule a technical discovery session with our lead architects. We’ll analyze your requirements and deliver a proposal within 48 hours.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg" className="!bg-violet-600 hover:!bg-violet-700 !text-white">
              Schedule Architecture Call
            </Button>
            <Button to="/services" variant="secondary" size="lg" icon={false} className="!border-slate-700 !bg-slate-900/80 !text-white">
              Browse All Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
