import PageHero from '../components/common/PageHero.jsx'
import Container from '../components/common/Container.jsx'
import Story from '../components/about/Story.jsx'
import Mission from '../components/about/Mission.jsx'
import Vision from '../components/about/Vision.jsx'
import Values from '../components/about/Values.jsx'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="About AD FutureStack"
        description="A passionate team of software architects, engineers, and product designers building the future of software."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
      />
      <Container className="py-12">
        <Story />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <Mission />
          <Vision />
        </div>
        <Values />
      </Container>
    </>
  )
}
