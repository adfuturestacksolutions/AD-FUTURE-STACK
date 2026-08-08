import ContactForm from '../components/ContactForm.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function CTA() {
  return (
    <section id="contact" className="border-t border-ink-line py-24 bg-grid-fade">
      <div className="container-page max-w-4xl">
        <SectionHeading
          eyebrow="Start a Conversation"
          title="Let’s build the next layer of your product"
          description="Tell us about your product goals, architectural challenges, or timeline — we’ll evaluate your requirements and reply within one business day."
        />

        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
