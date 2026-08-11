import { useState, useRef, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import {
  ChevronDown,
  Menu,
  X,
  Layers,
  Cpu,
  Sparkles,
  ArrowRight,
  Mail,
  Clock,
  PhoneCall,
} from 'lucide-react'
import { NAV_LINKS } from '../../data/navigation.js'
import { SITE_NAME, CONTACT_EMAIL, CONTACT_PHONE } from '../../utils/constants.js'

const iconMap = {
  Layers: <Layers className="h-4 w-4" />,
  Cpu: <Cpu className="h-4 w-4" />,
  Sparkles: <Sparkles className="h-4 w-4" />,
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()
  const timeoutRef = useRef(null)

  useEffect(() => {
    setActiveDropdown(null)
    setOpen(false)
  }, [location.pathname])

  const handleMouseEnter = (label) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  return (
    <header className="sticky top-0 z-50 w-full shadow-md transition-all font-sans bg-white">
      {/* TOP HEADER BAR */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2.5 px-4 lg:px-32 border-b border-slate-800 hidden md:block">
        <div className="max-w-9xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Welcome to IT Solutions & Services</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Mail className="h-3.5 w-3.5 text-violet-400" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-violet-400 transition-colors">{CONTACT_EMAIL}</a>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">

              <span>Let's Build Together</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-violet-400 transition-colors">Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-violet-400 transition-colors">Facebook</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-violet-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-24 h-20 flex items-center justify-between">
        {/* LEFT: Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-900 p-1 shadow-sm transition-transform group-hover:scale-105">
            <img
              src="/images/logo/ad-logo.png"
              onError={(e) => { e.target.src = '/images/AD Logo.png' }}
              alt={`${SITE_NAME} Logo`}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-montserrat text-xl font-bold tracking-tight text-slate-900 ">
              AD FUTURE STACK
            </span>
            <span className="text-[10px] font-monstserrat font-extrabold tracking-widest text-violet-700 uppercase">
              IT SOLUTIONS & SERVICES
            </span>
          </div>
        </Link>

        {/* CENTER: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary Navigation">
          {NAV_LINKS.map((link) => {
            const hasChildren = Boolean(link.children && link.children.length > 0)
            const isParentActive =
              location.pathname === link.to ||
              (hasChildren && link.children.some((child) => location.pathname === child.to))

            return (
              <div
                key={link.label}
                className="relative py-6"
                onMouseEnter={() => hasChildren && handleMouseEnter(link.label)}
                onMouseLeave={() => hasChildren && handleMouseLeave()}
              >
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-1 text-small font-semibold transition-colors uppercase tracking-wider ${isActive || isParentActive
                      ? 'text-violet-700'
                      : 'text-slate-800 hover:text-violet-700'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  {hasChildren && (
                    <ChevronDown
                      className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180 text-violet-700' : ''
                        }`}
                    />
                  )}
                </NavLink>

                {/* DROPDOWN MENU */}
                {hasChildren && activeDropdown === link.label && (
                  <div
                    className="absolute top-full left-0 w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200 mt-1.5"
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex flex-col gap-1.5">
                      {link.children.map((child) => (
                        <NavLink
                          key={child.label}
                          to={child.to}
                          className={({ isActive }) =>
                            `group p-3 rounded-xl transition-all duration-200 flex items-start gap-3.5 ${isActive
                              ? 'bg-violet-50 text-violet-700 font-bold'
                              : 'hover:bg-slate-50 text-slate-700 hover:text-slate-950'
                            }`
                          }
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 border border-slate-200 text-slate-800 group-hover:bg-violet-700 group-hover:text-white transition-all mt-0.5">
                            {iconMap[child.iconName] || <Layers className="h-4 w-4" />}
                          </div>

                          <div className="flex flex-col flex-1 min-w-0">
                            <span className="text-normal font-semibold flex items-center justify-between text-slate-900">
                              <span>{child.label}</span>
                              <ArrowRight className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </span>
                            {child.description && (
                              <span className="text-xs text-slate-500 mt-1 leading-relaxed font-normal">
                                {child.description}
                              </span>
                            )}
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* RIGHT SIDE: Phone Call Badge & CTA */}
        <div className="flex items-center gap-9">
          <div className="hidden xl:flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-violet-700 text-white flex items-center justify-center shadow-md">
              <PhoneCall className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">Let's Talk</span>
              <a href={`tel:${CONTACT_PHONE}`} className="text-normal font-semibold text-slate-900 hover:text-violet-700 transition-colors">
                {CONTACT_PHONE}
              </a>
            </div>
          </div>

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-violet-800 px-6 py-3 text-small font-bold text-white uppercase tracking-wider hover:bg-violet-700 transition-all shadow-md hover:shadow-violet-700/30 active:scale-95"
          >
            Contact us
          </Link>

          <button
            type="button"
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors border border-slate-200"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      {open && (
        <nav className="lg:hidden bg-white border-t border-slate-200 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const hasChildren = Boolean(link.children && link.children.length > 0)
              return (
                <div key={link.label} className="border-b border-slate-100 pb-3">
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => !hasChildren && setOpen(false)}
                    className={({ isActive }) =>
                      `text-base font-bold flex items-center justify-between ${isActive ? 'text-violet-700 font-extrabold' : 'text-slate-800'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                  </NavLink>

                  {hasChildren && (
                    <div className="mt-2.5 ml-3 flex flex-col gap-2.5 border-l border-slate-200 pl-3">
                      {link.children.map((child) => (
                        <NavLink
                          key={child.label}
                          to={child.to}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            `text-sm py-1.5 transition-colors flex items-center gap-2.5 ${isActive ? 'text-violet-700 font-bold' : 'text-slate-600 hover:text-slate-950'
                            }`
                          }
                        >
                          <div className="text-slate-800">
                            {iconMap[child.iconName] || <Layers className="h-4 w-4" />}
                          </div>
                          <span>{child.label}</span>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}

            <div className="pt-2 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-slate-500 font-bold">Call Anytime</span>
                <span className="text-xs font-extrabold text-slate-900">{CONTACT_PHONE}</span>
              </div>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-lg bg-violet-700 px-5 py-2.5 text-xs font-bold text-white uppercase tracking-wider hover:bg-violet-700 transition-all"
              >
                Get A Quote
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
