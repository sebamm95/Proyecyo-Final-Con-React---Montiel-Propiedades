import PropTypes from 'prop-types'
import '../styles/Gallery.css'

/** Galería de imágenes. */
function Gallery({ images }) {
  return (
    <div className="gallery">
      {images.map((img) => (
        <img key={img.src} className="gallery-item" src={img.src} alt={img.alt} />
      ))}
    </div>
  )
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({ src: PropTypes.string.isRequired, alt: PropTypes.string })
  ).isRequired,
}

export default Gallery
