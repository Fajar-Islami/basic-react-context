import React from 'react';
import { useAppContext } from '../context/app-context';

const ToggleTheme = () => {
  const [, dispatch] = useAppContext();
  return (
    <button onClick={() => dispatch({ type: 'toggleTheme' })}>
      Toggle Theme
    </button>
  );
};

export default ToggleTheme;
