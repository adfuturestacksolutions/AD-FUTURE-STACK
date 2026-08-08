import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import CTA from '../sections/CTA.jsx'

export default function ProjectsPage() {
  return (
    <>
      <div className="container-page py-20">
        <span className="eyebrow">Our work</span>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">
          Products we&rsquo;ve designed, built, and shipped
        </h1>
      </div>
      <section className="container-page pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <CTA />
    </>
  )
}
