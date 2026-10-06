import { useState } from 'react'

/**
 * Custom hook para formularios controlados.
 * - handleChange: actualiza el estado y muestra en consola cada cambio de input.
 * - handleSubmit: previene el comportamiento por defecto, muestra los datos en consola,
 *   ejecuta el callback onSubmit (si existe) y deja el formulario limpio.
 * - handleReset: vuelve el formulario a sus valores iniciales.
 */
function useForm(initialValues, onSubmit) {
  const [values, setValues] = useState(initialValues)

  const handleChange = (event) => {
    const { name, value } = event.target
    console.log(`Evento change -> campo "${name}":`, value)
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Formulario enviado. Datos:', values)
    if (onSubmit) onSubmit(values) 
    setValues(initialValues)      
  }

  const handleReset = (event) => {
    event.preventDefault() 
    console.log('Formulario reseteado')
    setValues(initialValues)
  }

  return { values, handleChange, handleSubmit, handleReset }
}

export default useForm
