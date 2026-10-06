import { useEffect } from 'react'

/** Custom hook: actualiza el <title> de la pestaña según la página. */
function usePageTitle(title) {
  useEffect(() => {
    document.title = `Montiel Propiedades - ${title}`
  }, [title])
}

export default usePageTitle
