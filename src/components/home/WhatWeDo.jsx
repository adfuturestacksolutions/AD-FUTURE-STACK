import Container from '../common/Container.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import { services } from '../../data/services.js'
import ServiceCard from '../services/ServiceCard.jsx'

export default function WhatWeDo() {
  return (
    <section className="py-20 bg-slate-50/80 border-y border-slate-200/80">
      <Container>
        <SectionHeading
          eyebrow="What We're Offering"
          title="Dealing in all Professional IT Services"
          subtitle="We offer a full-cycle software development services that meet varied business requirements from IT strategy consulting to the end-to-end development of scalable solutions."
          centered={true}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  )
}
