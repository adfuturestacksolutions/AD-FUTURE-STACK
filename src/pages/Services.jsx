import PageHero from '../components/common/PageHero.jsx'
import Container from '../components/common/Container.jsx'
import ServiceGrid from '../components/services/ServiceGrid.jsx'
import ServiceCTA from '../components/services/ServiceCTA.jsx'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Engineering Expertise"
        title="Bespoke Software Services"
        description="From high-throughput microservices to full-stack web products and AI-driven automation."
        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80"
      />
      <Container className="py-20">
        <ServiceGrid />
        <ServiceCTA />
      </Container>
    </>
  )
}
