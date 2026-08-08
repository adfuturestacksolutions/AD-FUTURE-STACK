import SectionHeading from '../components/SectionHeading.jsx'
import TechStack from '../components/TechStack.jsx'

export default function Technologies() {
  return (
    <section className="border-t border-ink-line bg-ink-surface/40 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our stack"
          title="Tools we trust in production"
          description="Chosen for maturity and community support, not novelty."
        />
        <div className="mt-12">
          <TechStack />
        </div>
      </div>
    </section>
  )
}
