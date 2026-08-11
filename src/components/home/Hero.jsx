import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import HeroBackground from './HeroBackground.jsx'
import Container from '../common/Container.jsx'

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const checkTouch = () => {
      const touchDetected =
        'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024
      setIsTouch(touchDetected)
    }

    checkTouch()
    window.addEventListener('resize', checkTouch)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('resize', checkTouch)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleMouseMove = (e) => {
    if (isTouch) return
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    const x = (clientX / innerWidth - 0.5) * 2
    const y = (clientY / innerHeight - 0.5) * 2
    setMousePos({ x, y })
  }

  const bgScale = Math.max(0.92, 1 - scrollY * 0.0002)
  const bgOpacity = Math.max(0, 1 - scrollY * 0.0015)
  const contentTranslateY = scrollY * 0.18

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-center items-center bg-slate-950 text-white overflow-hidden select-none py-20 lg:py-28"
    >
      <HeroBackground bgScale={bgScale} bgOpacity={bgOpacity} mousePos={mousePos} isTouch={isTouch} />

      {/* HERO CONTENT */}
      <Container
        className="relative z-20 text-center flex flex-col items-center justify-center space-y-6 sm:space-y-8"
        style={{ transform: `translate3d(0, ${contentTranslateY}px, 0)`, opacity: bgOpacity }}
      >
        {/* Eyebrow / Subtitle */}
        <div className="animate-hero-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <div className="inline-block">
            <span className="font-mono text-xs sm:text-sm font-extrabold tracking-[0.25em] text-slate-200 uppercase bg-slate-900/80 px-4 py-1.5 rounded-full border border-violet-500/40 backdrop-blur-md">
              EXPERIENCE THE BEST IT SOLUTIONS
            </span>
          </div>
        </div>

        {/* Main Headline matching Reference */}
        <div className="animate-hero-fade-up opacity-0 max-w-5xl" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <h1 className="font-extrabold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[1.05] drop-shadow-md">
            IT SOLUTIONS <span className="#2563EB  font-serif italic lowercase font-normal">&amp;</span>
            <br />
            SERVICES
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
            className="group relative inline-flex items-center justify-center gap-3 bg-violet-600 text-white px-9 py-4 rounded-md font-extrabold text-xs uppercase tracking-widest hover:bg-violet-700 transition-all shadow-xl hover:shadow-violet-600/40 active:scale-95"
          >
            <span>LEARN MORE</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>

      {/* RIGHT SIDE SLIDER ARROWS (Reference Style) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-30">
        <button
          type="button"
          aria-label="Previous Slide"
          className="h-10 w-10 rounded-full border border-white/30 bg-slate-900/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-violet-600 hover:border-violet-600 transition-all cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next Slide"
          className="h-10 w-10 rounded-full border border-white/30 bg-slate-900/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-violet-600 hover:border-violet-600 transition-all cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
