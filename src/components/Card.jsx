import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../styles/Card.css'

/** Tarjeta de servicio: imagen, título, texto y botón de acción. */

function Card({ image, title, description, linkText, linkTo }) {
  return (
    <div className="tags">
      <img src={image} alt={title} />
      <div className="tags-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Link to={linkTo} className="link-tags">{linkText}</Link>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
}

export default Card
