import React from 'react';
import './App.css';
import DisplayTheme from './components/DisplayTheme';
import Navbar from './components/Navbar';
// import Reducer from './components/Reducer';
import Settings from './components/Settings';
import ToggleTheme from './components/ToggleTheme';
import { AppProvider } from './context/app-context';
import { ThemeProvider } from './context/theme-context';

function App() {
  return (
    <div className='App'>
      {/* <Reducer /> */}

      <AppProvider>
        <ThemeProvider>
          <Navbar />
          <hr />
          <Settings />
          <hr />
          <DisplayTheme />
          <hr />
          <ToggleTheme />
        </ThemeProvider>
      </AppProvider>
    </div>
  );
}

export default App;
