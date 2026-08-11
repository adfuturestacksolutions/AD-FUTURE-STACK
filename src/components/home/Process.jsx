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

    </section>
  )
}
