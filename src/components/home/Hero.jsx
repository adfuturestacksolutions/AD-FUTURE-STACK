import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import HeroBackground from './HeroBackground.jsx'
import Container from '../common/Container.jsx'

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    const x = (clientX / innerWidth - 0.5) * 2
    const y = (clientY / innerHeight - 0.5) * 2
    setMousePos({ x, y })
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-center items-center bg-slate-950 text-white overflow-hidden select-none py-20 lg:py-28"
    >
      <HeroBackground mousePos={mousePos} />

      {/* HERO CONTENT */}
      <Container
        className="relative z-20 text-center flex flex-col items-center justify-center space-y-6 sm:space-y-8"
      >
        {/* Eyebrow / Subtitle */}
        <div className="animate-hero-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>

        </div>

        {/* Main Headline matching Reference */}
        <div className="animate-hero-fade-up opacity-0 max-w-5xl" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <h1 className="font-normal text-7xl text-white tracking-tight uppercase leading-[1.05] drop-shadow-md">
            WE BUILD DIGITAL
            EXPERIENCES THAT MATTER

          </h1>
        </div>

        {/* Supporting Text */}
        <div className="animate-hero-fade-up opacity-0 max-w-2xl" style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}>
          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed text-center drop-shadow-sm">
            We partner with ambitious companies to deliver scalable cloud architecture, custom software development, and intelligent digital transformation.
          </p>
        </div>

        {/* Primary CTA Button with Accent Arrow */}
        <div className="animate-hero-fade-up opacity-0 pt-4 flex flex-col sm:flex-row items-center gap-6" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <Link
            to="/services"
            className="group relative inline-flex items-center justify-center gap-3 bg-violet-700 text-white px-9 py-4 rounded-md font-bold text-medium uppercase tracking-widest hover:bg-violet-700 transition-all shadow-xl hover:shadow-violet-700/40 active:scale-95"
          >
            <span>Let's Build</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>


    </section>
  )
}
