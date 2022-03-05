import React from 'react';
import { useAppContext } from '../context/app-context';

const NavbarUserAvatar = () => {
  const context = useAppContext();
  //   console.log(context);

  return <img src={context?.user?.avatar} alt='avatar' width='50' />;
};

export default NavbarUserAvatar;
