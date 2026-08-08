import { services } from '../data/services.js'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'

export default function Services() {
  return (
    <section id="capabilities" className="border-t border-ink-line py-24 bg-ink">
      <div className="container-page">
        <SectionHeading
          eyebrow="Capabilities & Core Competencies"
          title="End-to-End Engineering Across Every Layer"
          description="From frontend interfaces to backend microservices and cloud telemetry, our specialized engineering teams execute every layer of your modern product stack."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
