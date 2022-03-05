import React from 'react';
import { useAppContext } from '../context/app-context';

const ToggleTheme = () => {
  const context = useAppContext();
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
