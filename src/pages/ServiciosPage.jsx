import Cards from '../components/Cards.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import comprar from '../assets/servicios-comprar.jpg'
import alquilar from '../assets/servicios-alquilar.jpeg'
import tasaciones from '../assets/servicios-tasaciones.jpg'

const SERVICIOS = [
  {
    id: 1,
    image: comprar,
    title: 'Compra',
    description:
      'Encontrá el hogar ideal para vos y tu familia. Te acompañamos en todo el proceso de búsqueda, asesoramiento financiero y gestión legal para que tu compra sea rápida, segura y al mejor precio del mercado.',
    linkText: '¡Quiero comprar!',
    linkTo: '/contacto',
  },
  {
    id: 2,
    image: alquilar,
    title: 'Alquiler',
    description:
      'Descubrí una amplia variedad de propiedades disponibles para alquilar. Ya sea que busques tu próximo hogar o un espacio comercial, te ofrecemos un trámite ágil, transparente y con las mejores condiciones.',
    linkText: '¡Quiero alquilar!',
    linkTo: '/contacto',
  },
  {
    id: 3,
    image: tasaciones,
    title: 'Tasaciones',
    description:
      'Conocé el valor real de tu propiedad en el mercado actual. Realizamos valoraciones precisas y profesionales basadas en un análisis detallado del entorno para ayudarte a tomar la mejor decisión de venta o alquiler.',
    linkText: '¡Quiero tasar mi vivienda!',
    linkTo: '/contacto',
  },
]

function ServiciosPage() {
  usePageTitle('Servicios')
  return (
    <>
      <h1>Nuestros Servicios</h1>
      <Cards items={SERVICIOS} />
    </>
  )
}

export default ServiciosPage
