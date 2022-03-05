import React from 'react';
import './App.css';
import DisplayTheme from './components/DisplayTheme';
import Navbar from './components/Navbar';
import Settings from './components/Settings';
import ToggleTheme from './components/ToggleTheme';
import { AppProvider } from './context/app-context';

function App() {
  return (
    <div className='App'>
      <AppProvider>
        <Navbar />
        <hr />
        <Settings />
        <hr />
        <DisplayTheme />
        <ToggleTheme />
      </AppProvider>
    </div>
  );
}

export default App;
