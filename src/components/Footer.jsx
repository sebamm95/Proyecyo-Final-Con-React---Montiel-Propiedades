import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { NAV_LINKS } from './Navbar.jsx'
import '../styles/Footer.css'

/** Footer reutilizable: links de navegación separados por "|" y copyright. */

function Footer({ text = 'Montiel Propiedades © 2026' }) {
  return (
    <footer>
      <div className="footer">
        <ul className="list-nav list-nav-footer">
          {NAV_LINKS.map(({ to, label }, index) => (
            <Fragment key={to}>
              {index > 0 && <li aria-hidden="true">|</li>}
              <li>
                <Link className="link-nav" to={to}>{label}</Link>
              </li>
            </Fragment>
          ))}
        </ul>
        <p className="copyright">{text}</p>
      </div>
    </footer>
  )
}

Footer.propTypes = { text: PropTypes.string }

export default Footer
