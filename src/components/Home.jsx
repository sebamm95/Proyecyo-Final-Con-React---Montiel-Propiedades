import { Link } from 'react-router-dom'
import bgImage from '../assets/Buenos_Aires.png'
import '../styles/Home.css'

/** Sección principal (hero) de la página de inicio. */

function Home() {
  return (
    <div className="contenedor-fondo" style={{ '--hero-image': `url(${bgImage})` }}>
      <div className="contenido-prin">
        <h1>Montiel Propiedades</h1>
        <p>Transparencia y seguridad para cada una de tus decisiones.</p>
        <Link to="/servicios">Nuestros servicios</Link>
      </div>
    </div>
  )
}

export default Home
