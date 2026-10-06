import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import ServiciosPage from './pages/ServiciosPage.jsx'
import PropiedadesPage from './pages/PropiedadesPage.jsx'
import ContactoPage from './pages/ContactoPage.jsx'

/**
 * App: archivo principal donde se enlazan las secciones.
 * El Layout envuelve todas las rutas y muestra la página activa con <Outlet />.
 */

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="servicios" element={<ServiciosPage />} />
        <Route path="propiedades" element={<PropiedadesPage />} />
        <Route path="contacto" element={<ContactoPage />} />
        <Route path="*" element={<h1 className="page-title">Página no encontrada</h1>} />
      </Route>
    </Routes>
  )
}

export default App
