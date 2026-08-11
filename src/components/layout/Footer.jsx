import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe, Share2, Code2 } from 'lucide-react'
import { SITE_NAME, CONTACT_EMAIL, CONTACT_PHONE, OFFICE_ADDRESS } from '../../utils/constants.js'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 p-1">
                <img
                  src="/images/logo/ad-logo.png"
                  onError={(e) => { e.target.src = '/images/AD Logo.png' }}
                  alt={`${SITE_NAME} Logo`}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-lg font-bold text-white tracking-tight leading-tight">
                  AD FUTURESTACK
                </span>
                <span className="text-[10px] font-mono tracking-widest text-violet-400 uppercase font-bold">
                  IT SOLUTIONS & SERVICES
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Architecting next-generation digital products, intelligent systems, and scalable cloud platforms for ambitious enterprises worldwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="h-9 w-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-violet-400 hover:border-violet-500/50 transition-all">
                <Code2 className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="h-9 w-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-violet-400 hover:border-violet-500/50 transition-all">
                <Globe className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="h-9 w-9 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-violet-400 hover:border-violet-500/50 transition-all">
                <Share2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-violet-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-violet-400 transition-colors">Services</Link></li>
              <li><Link to="/capabilities" className="hover:text-violet-400 transition-colors">Capabilities</Link></li>
              <li><Link to="/solutions" className="hover:text-violet-400 transition-colors">Solutions</Link></li>
              <li><Link to="/projects" className="hover:text-violet-400 transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* Solutions & Tech */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">Expertise</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services" className="hover:text-violet-400 transition-colors">Product Engineering</Link></li>
              <li><Link to="/capabilities" className="hover:text-violet-400 transition-colors">Cloud & DevOps</Link></li>
              <li><Link to="/solutions" className="hover:text-violet-400 transition-colors">AI & RAG Workflows</Link></li>
              <li><Link to="/about" className="hover:text-violet-400 transition-colors">About Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-violet-400 transition-colors">Consultation</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-violet-400 shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-violet-400 transition-colors">{CONTACT_EMAIL}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-violet-400 shrink-0" />
                <span className="hover:text-violet-400 transition-colors">{CONTACT_PHONE}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-violet-400 shrink-0 mt-0.5" />
                <span className="hover:text-violet-400 transition-colors">{OFFICE_ADDRESS}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} AD FutureStack Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-violet-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-violet-400 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-violet-400 cursor-pointer transition-colors">Security SLA</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
