import { Link, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import logo from '../assets/Logo_Montiel_Propiedades.png'
import '../styles/Navbar.css'

// Links compartidos con el Footer
export const NAV_LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/propiedades', label: 'Propiedades' },
  { to: '/contacto', label: 'Contacto' },
]

/** Barra de navegación reutilizable. NavLink agrega la clase "active" al link de la página actual. */
function Navbar({ links = NAV_LINKS }) {
  return (
    <header>
      <div className="main-header">
        <div className="logo-header">
          <Link to="/">
            <img src={logo} alt="Logo Montiel Propiedades" />
          </Link>
        </div>
        <div className="nav-main-header">
          <nav className="nav-content-header">
            <ul className="list-nav">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) => (isActive ? 'link-nav active' : 'link-nav')}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({ to: PropTypes.string.isRequired, label: PropTypes.string.isRequired })
  ),
}

export default Navbar
