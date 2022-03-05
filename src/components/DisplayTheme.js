import React from 'react';
import { useAppContext } from '../context/app-context';

const DisplayTheme = () => {
  const [state] = useAppContext();

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
