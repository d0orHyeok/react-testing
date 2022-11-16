import React from 'react'
import './App.css'
import CheckTheme from './components/CheckTheme/CheckTheme'
import Users from './components/Users/Users'
import { AppProvider } from './providers/AppProvider'

function App() {
  return (
    <AppProvider>
      <div className="App">
        <CheckTheme />
        <Users />
      </div>
    </AppProvider>
  )
}

export default App
