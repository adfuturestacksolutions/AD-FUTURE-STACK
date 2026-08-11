import PageHero from '../components/common/PageHero.jsx'
import Container from '../components/common/Container.jsx'
import CapabilityCard from '../components/capabilities/CapabilityCard.jsx'
import TechStack from '../components/capabilities/TechStack.jsx'
import Architecture from '../components/capabilities/Architecture.jsx'
import { capabilities } from '../data/capabilities.js'

export default function Capabilities() {
  return (
    <>
      <PageHero
        eyebrow="Technical Matrix"
        title="Engineering Capabilities"
        description="Deep domain proficiency across modern languages, distributed infrastructure, and AI systems."
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80"
      />
      <Container className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {capabilities.map((cap) => (
            <CapabilityCard key={cap.id} capability={cap} />
          ))}
        </div>

        <TechStack />
        <Architecture />
      </Container>
    </>
  )
}
