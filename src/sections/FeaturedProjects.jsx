import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

export default function FeaturedProjects() {
  return (
    <section id="case-studies" className="border-t border-ink-line bg-ink-surface/40 py-24">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Case Studies & Client Impact"
            title="Proven Results & Shipped Products"
            description="Explore how we helped engineering teams scale infrastructure, optimize performance, and launch complex web applications."
          />
          <Link to="/case-studies" className="text-xs font-bold uppercase tracking-wider text-signal-violet hover:underline">
            View all Case Studies &rarr;
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
