import { Link } from 'react-router-dom'

export default function Hero() {
  const scrollToContact = (e) => {
    e.preventDefault()
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="overview" className="relative overflow-hidden bg-[#07080a] min-h-[85vh] flex flex-col justify-between pt-8 pb-12">
      {/* Soft Ambient Radial Background Glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 35%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 40%, rgba(7, 8, 10, 0) 70%)'
        }}
      />

      {/* Giant Right Watermark Geometric Software Architecture Graphic */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[550px] sm:w-[700px] md:w-[850px] h-[650px] md:h-[800px] pointer-events-none select-none opacity-20">
        <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="fsGradTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="fsGradMid" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.01" />
            </linearGradient>
            <linearGradient id="fsGradBot" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
            </linearGradient>
          </defs>

          {/* Futuristic Architecture Stack Layers */}
          <path d="M 280,120 L 720,120 L 580,260 L 140,260 Z" fill="url(#fsGradTop)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
          <path d="M 720,120 L 320,580 L 140,580 L 580,260 Z" fill="url(#fsGradMid)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
          <path d="M 320,580 L 720,580 L 580,720 L 180,720 Z" fill="url(#fsGradBot)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
          {/* Inner accent core line */}
          <line x1="280" y1="120" x2="720" y2="580" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeDasharray="8 8" />
        </svg>
      </div>

      {/* Hero Content Container */}
      <div className="container-page relative z-10 flex flex-col items-center justify-center text-center my-auto px-4 pt-12">
        {/* Top Badge: AD Emblem + 100+ SOLUTIONS */}
        <div className="inline-flex items-center gap-3.5 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md shadow-xl shadow-black/30 transition-transform hover:scale-105">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-white/20 via-white/10 to-transparent border border-white/20 shadow-inner text-white font-extrabold text-xs font-mono tracking-tighter">
            AD
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1 font-display font-black text-white text-lg leading-none tracking-tight">
              <span>STACK</span>
              <span className="text-xl font-bold">100+</span>
            </div>
            <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase font-semibold mt-0.5">ENTERPRISE SOFTWARE</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="mt-8 text-center text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.15]">
          India's Premier Enterprise<br />Software & AI Solutions Studio.
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-center text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
          We architect, engineer, and scale custom web platforms, cloud microservices, and high-performance digital solutions for enterprise leaders.
        </p>

        {/* Primary Call to Action */}
        <div className="mt-8">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 hover:bg-white/20 px-9 py-3.5 text-sm font-medium text-white shadow-2xl backdrop-blur-md transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Start a Project
          </a>
        </div>
      </div>

      {/* Bottom Feature Bar */}
      <div className="container-page relative z-10 mt-16 border-t border-white/5 pt-8 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-xs text-gray-300 font-medium">
          <div className="flex items-center gap-2.5 transition-colors hover:text-white">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border border-white/10">
              <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <span>Custom Software Engineering</span>
          </div>

          <div className="flex items-center gap-2.5 transition-colors hover:text-white">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border border-white/10">
              <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
              </svg>
            </div>
            <span>Cloud & Microservices</span>
          </div>

          <div className="flex items-center gap-2.5 transition-colors hover:text-white">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border border-white/10">
              <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21m7.5-1.5V21m-7.5-18H15.75A2.25 2.25 0 0118 5.25v13.5A2.25 2.25 0 0115.75 21H8.25A2.25 2.25 0 018.25 3z" />
              </svg>
            </div>
            <span>AI & Data Intelligence</span>
          </div>
        </div>
      </div>
    </section>
  )
}

