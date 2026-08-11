import PageHero from '../components/common/PageHero.jsx'
import Container from '../components/common/Container.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'
import ContactInfo from '../components/contact/ContactInfo.jsx'
import FAQ from '../components/contact/FAQ.jsx'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Start a Conversation"
        title="Contact Solutions Architecture"
        description="Ready to discuss your technical vision? Schedule a call or submit your project scope below."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=2000&q=80"
      />
      <Container className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <ContactForm />
          <ContactInfo />
        </div>
        <FAQ />
      </Container>
    </>
  )
}
