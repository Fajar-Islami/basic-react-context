import React from 'react';
import { useThemeContext } from '../context/theme-context';

const DisplayTheme = () => {
  const [state] = useThemeContext();

  console.log('DisplayTheme render');

  /* Hasil console.log(state)
    [
        {
        user: {},
        theme: 'dark',
        },
        null,
    ];
  */

  return <div> {state.theme} </div>;
};

export default DisplayTheme;
