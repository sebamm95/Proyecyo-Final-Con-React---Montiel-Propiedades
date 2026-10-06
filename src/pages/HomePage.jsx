import Home from '../components/Home.jsx'
import usePageTitle from '../hooks/usePageTitle.js'

function HomePage() {
  usePageTitle('Inicio')
  return <Home />
}

export default HomePage
