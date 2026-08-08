import ContactForm from '../components/ContactForm.jsx'
import { CONTACT_EMAIL } from '../utils/constants.js'

export default function ContactPage() {
  return (
    <div className="container-page grid gap-12 py-20 md:grid-cols-2 md:py-28">
      <div>
        <span className="eyebrow">Get in touch</span>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Let&rsquo;s talk about your product</h1>
        <p className="mt-6 max-w-md text-fog">
          Tell us about what you&rsquo;re building and we&rsquo;ll reply within one business day. Prefer email?
          Reach us directly at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-signal-violet hover:underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
      <ContactForm />
    </div>
  )
}
