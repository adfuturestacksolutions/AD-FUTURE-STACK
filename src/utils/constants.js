export const SITE_NAME = 'AD FutureStack'

export const NAV_LINKS = [
  { label: 'Home', to: '/', sectionId: 'overview' },
  { label: 'Services', to: '/services', sectionId: 'services' },
  { label: 'Capabilities', to: '/capabilities', sectionId: 'capabilities' },
  { label: 'Solutions', to: '/solutions', sectionId: 'solutions' },
  { label: 'About', to: '/about', sectionId: 'about' },
  { label: 'Contact Us', to: '/contact', sectionId: 'contact' },
]

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'X', href: 'https://x.com' },
]

export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'hello@futurestack.dev'

export const PROCESS_STEPS = [
  {
    title: 'Discover',
    description: 'We map your product, your users, and the constraints that actually matter before writing a line of code.',
  },
  {
    title: 'Architect',
    description: 'We choose a stack for your product\u2019s next three years, not just its next sprint.',
  },
  {
    title: 'Build',
    description: 'Two-week cycles, a staging environment from day one, and a changelog you can actually read.',
  },
  {
    title: 'Ship & Support',
    description: 'We deploy, monitor, and stay on call through launch \u2014 then hand off a codebase your team owns.',
  },
]
