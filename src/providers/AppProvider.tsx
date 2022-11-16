import React, { createContext, useContext, useState } from 'react'

interface AppProviderProps {
  children: React.ReactNode
}

interface IAppContext {
  theme: string
  setTheme: (theme: string) => void
}

export const AppContext = createContext<IAppContext | undefined>(undefined)

export const AppProvider = ({ children }: AppProviderProps) => {
  const [theme, setTheme] = useState('light')

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppProvider = () => {
  const context = useContext(AppContext)
  return (
    context || {
      theme: 'light',
      setTheme: function (params: string) {
        return
      },
    }
  )
}
