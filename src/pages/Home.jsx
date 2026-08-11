import Hero from '../components/home/Hero.jsx'
import Story from '../components/about/Story.jsx'
import WhatWeDo from '../components/home/WhatWeDo.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import Process from '../components/home/Process.jsx'
import Technologies from '../components/home/Technologies.jsx'
import HomeCTA from '../components/home/HomeCTA.jsx'
import Container from '../components/common/Container.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <Story />
      </Container>
      <FeaturedProjects />
      <Process />
      <Technologies />
      <WhatWeDo />
      <HomeCTA />
    </>
  )
}
