import React from 'react';
import { useAppContext } from '../context/app-context';

const NavbarUserText = () => {
  const [state] = useAppContext();

  console.log('NavbarUserText render');

  return <span>Hi, {state?.user?.name} </span>;
};

export default NavbarUserText;
