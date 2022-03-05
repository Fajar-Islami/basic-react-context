import React, { useContext } from 'react';
import { AppContext } from '../context/app-context';

const NavbarUserAvatar = () => {
  const context = useContext(AppContext);
  //   console.log(context);

  return <img src={context?.user?.avatar} alt='avatar' width='50' />;
};

export default NavbarUserAvatar;
