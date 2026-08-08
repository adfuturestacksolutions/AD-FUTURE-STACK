import Services from '../sections/Services.jsx'
import Process from '../sections/Process.jsx'
import Technologies from '../sections/Technologies.jsx'
import CTA from '../sections/CTA.jsx'

export default function ServicesPage() {
  return (
    <>
      <div className="container-page py-20">
        <span className="eyebrow">Services</span>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">
          Everything your product stack needs
        </h1>
      </div>
      <Services />
      <Process />
      <Technologies />
      <CTA />
    </>
  )
}
