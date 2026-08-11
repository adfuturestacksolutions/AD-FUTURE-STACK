import Container from '../common/Container.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import { Search, Compass, Code, Rocket } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Discovery & Audit',
    icon: Search,
    description: 'We audit your architecture, identify technical debt, and define explicit product KPIs before writing code.'
  },
  {
    num: '02',
    title: 'Architecture Blueprint',
    icon: Compass,
    description: 'We map server schemas, database boundaries, security protocols, and cloud topology optimized for scale.'
  },
  {
    num: '03',
    title: 'Iterative Engineering',
    icon: Code,
    description: 'Two-week agile sprints with staging environments from Day 1, automated CI/CD pipelines, and continuous code reviews.'
  },
  {
    num: '04',
    title: 'Deployment & SLA',
    icon: Rocket,
    description: 'Zero-downtime production releases, real-time APM telemetry monitoring, and ongoing SLA maintenance.'
  }
]

export default function Process() {
  return (
    <section className="py-20 bg-slate-50/70 border-b border-slate-200/80">
      <Container>
        <SectionHeading
          eyebrow="Methodology"
          title="Our Development Process"
          subtitle="A battle-tested 4-step framework that guarantees speed, quality, and complete transparency."
          centered={true}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const IconComponent = step.icon
            return (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:border-violet-500/50 hover:shadow-xl transition-all duration-300 relative group">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-mono font-extrabold text-violet-600/30 group-hover:text-violet-600 transition-colors">{step.num}</span>
                  <div className="h-10 w-10 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600">
                    <IconComponent className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
