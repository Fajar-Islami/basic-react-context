import React from 'react';
import { useThemeContext } from '../context/theme-context';

const ToggleTheme = () => {
  const [, dispatch] = useThemeContext();
  return (
    <button onClick={() => dispatch({ type: 'toggleTheme' })}>
      Toggle Theme
    </button>
  );
};

export default ToggleTheme;
