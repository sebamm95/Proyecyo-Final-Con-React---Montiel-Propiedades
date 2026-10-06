import PropTypes from 'prop-types'
import Card from './Card.jsx'
import '../styles/Cards.css'

/** Contenedor de tarjetas: renderiza una <Card> por cada item recibido. */

function Cards({ items }) {
  return (
    <div className="tag-servicios">
      {items.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  )
}

Cards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
      linkTo: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Cards
