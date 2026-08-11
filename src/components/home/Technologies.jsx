import Container from '../common/Container.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import { technologyCategories } from '../../data/technologies.js'

export default function Technologies() {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <Container>
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technologies We Master"
          subtitle="Modern, battle-tested toolchains chosen for security, performance, and maintainability."
          centered={true}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologyCategories.map((cat) => (
            <div key={cat.category} className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-violet-700 mb-6 pb-2 border-b border-slate-200">
                {cat.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {cat.items.map((item) => (
                  <div key={item.name} className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col">
                    <span className="text-sm font-bold text-slate-900">{item.name}</span>
                    <span className="text-[10px] font-mono text-slate-500 mt-1 font-semibold">{item.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
