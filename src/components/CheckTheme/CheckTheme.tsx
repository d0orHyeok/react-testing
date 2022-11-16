import React from 'react'
import { useAppProvider } from '../../providers/AppProvider'

const CheckTheme = () => {
  const { theme } = useAppProvider()
  return <h1>{theme} mode</h1>
}

export default CheckTheme
