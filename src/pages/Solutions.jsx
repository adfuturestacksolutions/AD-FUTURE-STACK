import PageHero from '../components/common/PageHero.jsx'
import Container from '../components/common/Container.jsx'
import SolutionGrid from '../components/solutions/SolutionGrid.jsx'
import SolutionCTA from '../components/solutions/SolutionCTA.jsx'

export default function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Turnkey Architectures"
        title="Enterprise Solution Blueprints"
        description="Accelerate deployment times with pre-engineered platform modules built for security and scale."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80"
      />
      <Container className="py-20">
        <SolutionGrid />
        <SolutionCTA />
      </Container>
    </>
  )
}
