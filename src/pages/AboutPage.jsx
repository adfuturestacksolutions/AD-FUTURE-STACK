import About from '../sections/About.jsx'
import WhyUs from '../sections/WhyUs.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import CTA from '../sections/CTA.jsx'

export default function AboutPage() {
  return (
    <>
      <div className="container-page py-20">
        <span className="eyebrow">About FutureStack</span>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">
          We&rsquo;re engineers, not just an agency
        </h1>
      </div>
      <About />
      <WhyUs />
      <Testimonials />
      <CTA />
    </>
  )
}
