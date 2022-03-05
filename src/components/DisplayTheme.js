import React from 'react';
import { useAppContext } from '../context/app-context';

const DisplayTheme = () => {
  const context = useAppContext();

  return <div> {context.theme} </div>;
};

export default DisplayTheme;
