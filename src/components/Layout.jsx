import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import '../styles/Layout.css'

// Clase del <main> según la ruta
const PAGE_CLASS = {
  '/': 'main-inicio',
  '/servicios': 'main-servicios',
  '/propiedades': 'main-propiedades',
  '/contacto': 'main-contacto',
}

/** Contenedor principal: Navbar arriba, contenido dinámico (Outlet) al medio y Footer abajo. */

function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Navbar />
      <main className={PAGE_CLASS[pathname] ?? ''}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
