import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { NAV_LINKS, SITE_NAME } from '../utils/constants.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavClick = (e, link) => {
    if (location.pathname === '/') {
      e.preventDefault()
      const element = document.getElementById(link.sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
      navigate(link.to)
    }
    setOpen(false)
  }

  const handleStartConversationClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault()
      const element = document.getElementById('contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/contact')
    }
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-md px-8 sm:px-16 md:px-24 lg:px-32 transition-all">
      <div className="container-page flex h-20 items-center justify-between px-0">
        {/* Brand Logo & Name */}
        <Link to="/" className="group flex items-center gap-3 transition-opacity hover:opacity-90">
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/10 p-1 border border-white/20 shadow-md">
            <img
              src="/images/AD Logo.png"
              alt={`${SITE_NAME} Logo`}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
            {SITE_NAME} <span className="text-[11px] font-mono text-gray-400 font-normal tracking-wide hidden sm:inline-block">SOLUTIONS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link, index) => {
            const isHome = index === 0
            return (
              <a
                key={link.label}
                href={link.to}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-[14px] font-medium transition-all ${
                  isHome
                    ? 'bg-white/10 text-white rounded-full px-5 py-1.5 border border-white/10 shadow-inner'
                    : 'text-gray-300 hover:text-white px-4 py-1.5'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={`h-[2px] w-5 bg-white transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-[2px] w-5 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-[2px] w-5 bg-white transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <nav className="border-t border-white/10 bg-black/95 backdrop-blur-xl px-6 py-6 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.to}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`flex items-center justify-between text-sm font-medium ${
                    index === 0 ? 'text-white font-bold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}