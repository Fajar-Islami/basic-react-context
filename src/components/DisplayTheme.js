import React, { useContext } from 'react';
import { AppContext } from '../context/app-context';

const DisplayTheme = () => {
  const context = useContext(AppContext);

  return <div> {context.theme} </div>;
};

export default DisplayTheme;
