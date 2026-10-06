import { useState } from 'react'
import useForm from '../hooks/useForm.js'
import '../styles/Contact.css'

// Valores iniciales de todos los campos del formulario
const INITIAL_VALUES = {
  name: '',
  lastName: '',
  phone: '',
  email: '',
  reason: '',
  firstVisit: '',
  comment: '',
}

/** Formulario de contacto controlado: cada campo lee su valor del estado (value/checked) y lo actualiza con onChange. */
function Contact() {
  // Datos del último envío (null = todavía no se envió nada).
  const [submitted, setSubmitted] = useState(null)

  // useForm recibe un callback que se ejecuta al enviar con todos los datos del formulario
  const { values, handleChange, handleSubmit, handleReset } = useForm(INITIAL_VALUES, (data) => {
    setSubmitted(data)
  })

  // Al limpiar el formulario también se oculta el mensaje de confirmación
  const onReset = (event) => {
    handleReset(event)
    setSubmitted(null)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} onReset={onReset}>
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" id="name" placeholder="Tu nombre"
          value={values.name} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Apellido</label>
        <input type="text" name="lastName" id="lastName" placeholder="Tu apellido"
          value={values.lastName} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Teléfono</label>
        <input type="tel" name="phone" id="phone" placeholder="+54 1122334455"
          value={values.phone} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="youremail@mail.com"
          value={values.email} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="reason">Motivo de contacto</label>
        <select name="reason" id="reason" value={values.reason} onChange={handleChange}>
          <option value="" disabled>Selecciona una opción</option>
          <option value="compra">Comprar</option>
          <option value="alquiler">Alquilar</option>
          <option value="tasacion">Tasar una propiedad</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <fieldset>
        <legend>¿Es tu primera vez en Montiel Propiedades?</legend>
        <div className="radio-group">
          <div>
            <input type="radio" id="first-yes" name="firstVisit" value="si"
              checked={values.firstVisit === 'si'} onChange={handleChange} required />
            <label htmlFor="first-yes">si</label>
          </div>
          <div>
            <input type="radio" id="first-no" name="firstVisit" value="no"
              checked={values.firstVisit === 'no'} onChange={handleChange} required />
            <label htmlFor="first-no">no</label>
          </div>
        </div>
      </fieldset>

      <div className="form-group">
        <label htmlFor="comment">Mensaje</label>
        <textarea name="comment" id="comment" placeholder="Escribe su mensaje aquí..."
          cols="40" rows="5" maxLength="2000" minLength="1"
          value={values.comment} onChange={handleChange} required />
      </div>

      <div className="form-buttons">
        <button className="btn btn-primary" type="submit">Enviar mensaje</button>
        <button className="btn btn-secondary" type="reset">Limpiar formulario</button>
      </div>

      {/* Confirmación visible después de enviar */}
      {submitted && (
        <p className="form-success" role="status">
          ¡Gracias {submitted.name}! Tu mensaje fue enviado. Te contactaremos a {submitted.email}.
        </p>
      )}
    </form>
  )
}

export default Contact
