import PageHero from '../components/common/PageHero.jsx'
import Container from '../components/common/Container.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Proven Results"
        title="Client Case Studies"
        description="Discover how our engineering solutions delivered measurable throughput and uptime for industry leaders."
        image="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=2000&q=80"
      />
      <div className="py-12">
        <FeaturedProjects />
      </div>
    </>
  )
}
