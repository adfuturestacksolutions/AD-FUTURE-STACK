import Container from '../common/Container.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import { projects } from '../../data/projects.js'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="Case Studies"
            title="Featured Projects"
            subtitle="Explore high-impact platforms built for scale, performance, and security."
          />
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-violet-600 hover:text-violet-700 transition-colors">
            <span>View All Projects</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:border-violet-500/50 hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono font-bold text-violet-700 border border-slate-200 shadow-sm">
                  {project.stats}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <span className="text-xs font-mono font-bold text-violet-600 uppercase">{project.category}</span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-violet-600 transition-colors">{project.title}</h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
