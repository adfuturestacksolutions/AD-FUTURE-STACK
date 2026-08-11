import PageHero from '../components/common/PageHero.jsx'
import Container from '../components/common/Container.jsx'
import CapabilitiesList from '../components/capabilities/CapabilityItem.jsx'
import TechStack from '../components/capabilities/TechStack.jsx'
import Architecture from '../components/capabilities/Architecture.jsx'

export default function Capabilities() {
  return (
    <>
      <PageHero
        eyebrow="Technical Matrix"
        title="Engineering Capabilities"
        description="Deep domain proficiency across modern languages, distributed infrastructure, and AI systems."
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80"
      />
      <Container className="py-12 sm:py-20">
        <CapabilitiesList />
        <TechStack />
        <Architecture />
      </Container>
    </>
  )
}
