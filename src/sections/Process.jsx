import SectionHeading from '../components/SectionHeading.jsx'
import ProcessStep from '../components/ProcessStep.jsx'
import { PROCESS_STEPS } from '../utils/constants.js'

export default function Process() {
  return (
    <section className="border-t border-ink-line py-24">
      <div className="container-page grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          eyebrow="How we work"
          title="A process built for momentum"
          description="Four stages, two-week cycles, no black boxes."
        />
        <div>
          {PROCESS_STEPS.map((step, i) => (
            <ProcessStep
              key={step.title}
              index={i + 1}
              title={step.title}
              description={step.description}
              isLast={i === PROCESS_STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
