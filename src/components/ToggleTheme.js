import React, { useContext } from 'react';
import { AppContext } from '../context/app-context';

const ToggleTheme = () => {
  const context = useContext(AppContext);
  return (
    <button
      onClick={() =>
        context.setTheme(context.theme === 'light' ? 'dark' : 'light')
      }>
      {' '}
      Toggle Theme
    </button>
  );
};

export default ToggleTheme;
