import React from 'react';
import { useAppContext } from '../context/app-context';

const NavbarUserAvatar = () => {
  const [state] = useAppContext();
  //   console.log(context);

  console.log('NavbarUserAvatar render');

  return <img src={state?.user?.avatar} alt='avatar' width='50' />;
};

export default NavbarUserAvatar;
