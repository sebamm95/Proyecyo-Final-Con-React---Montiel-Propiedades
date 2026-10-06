import Contact from '../components/Contact.jsx'
import usePageTitle from '../hooks/usePageTitle.js'

function ContactoPage() {
  usePageTitle('Contacto')
  return (
    <>
      <h1 className="page-title">Contacto</h1>
      <section className="main-section">
        <Contact />
      </section>
    </>
  )
}

export default ContactoPage
