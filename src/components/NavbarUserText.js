import React from 'react';
import { useAppContext } from '../context/app-context';

const NavbarUserText = () => {
  const context = useAppContext();

  return <span>Hi, {context?.user?.name} </span>;
};

export default NavbarUserText;
