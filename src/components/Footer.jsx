import { Link } from 'react-router-dom'
import { NAV_LINKS, SITE_NAME, SOCIAL_LINKS, CONTACT_EMAIL } from '../utils/constants.js'

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-3 text-paper transition-opacity hover:opacity-90">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-ink border border-ink-line shadow-inner">
              <img
                src="/images/AD Logo.png"
                alt={`${SITE_NAME} Logo`}
                className="h-full w-full object-contain p-1"
              />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-paper">
              AD <span className="text-signal-violet font-black">FutureStack</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-fog leading-relaxed">
            An engineering studio that designs, builds, and ships modern enterprise product stacks &mdash; front to back.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Navigation</p>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-sm text-fog hover:text-paper transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="text-sm text-signal-violet hover:underline font-semibold">
                Start a Conversation
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Connect & Legal</p>
          <ul className="space-y-2">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-fog hover:text-paper transition-colors">
                {CONTACT_EMAIL}
              </a>
            </li>
            {SOCIAL_LINKS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="text-sm text-fog hover:text-paper transition-colors">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-line/70">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-fog/70 md:flex-row">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p className="font-mono">Built with Montserrat & Precision Engineering.</p>
        </div>
      </div>
    </footer>
  )
}
