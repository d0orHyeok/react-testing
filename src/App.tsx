import React from 'react';
import './App.css';
import CheckTheme from './components/CheckTheme/CheckTheme';
import { AppProvider } from './providers/AppProvider';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <CheckTheme />
      </div>
    </AppProvider>
  );
}

export default App;
