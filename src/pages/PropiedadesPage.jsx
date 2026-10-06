import Gallery from '../components/Gallery.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import p1 from '../assets/propiedad-1.jpeg'
import p2 from '../assets/propiedad-2.jpeg'
import p3 from '../assets/propiedad-3.jpg'
import p4 from '../assets/propiedad-4.jpeg'
import p5 from '../assets/propiedad-5.jpeg'
import p6 from '../assets/propiedad-6.jpeg'
import p7 from '../assets/propiedad-7.png'
import p8 from '../assets/propiedad-8.jpg'
import p9 from '../assets/propiedad-9.jpeg'

const IMAGES = [p1, p2, p3, p4, p5, p6, p7, p8, p9].map((src, i) => ({
  src,
  alt: `Propiedad ${i + 1}`,
}))

function PropiedadesPage() {
  usePageTitle('Propiedades')
  return (
    <>
      <h1>Propiedades</h1>
      <section className="main-section">
        <Gallery images={IMAGES} />
      </section>
    </>
  )
}

export default PropiedadesPage
