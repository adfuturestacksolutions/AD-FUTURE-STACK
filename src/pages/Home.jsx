import Hero from '../sections/Hero.jsx' // 1. Overview
import Services from '../sections/Services.jsx' // 2. Capabilities
import Solutions from '../sections/Solutions.jsx' // 3. Solutions
import Industries from '../sections/Industries.jsx' // 4. Industries
import FeaturedProjects from '../sections/FeaturedProjects.jsx' // 5. Case Studies
import Insights from '../sections/Insights.jsx' // 6. Insights
import About from '../sections/About.jsx' // 7. About
import CTA from '../sections/CTA.jsx' // 8. Start a Conversation

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Solutions />
      <Industries />
      <FeaturedProjects />
      <Insights />
      <About />
      <CTA />
    </>
  )
}
