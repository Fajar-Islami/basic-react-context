import React, { useContext } from 'react';
import { AppContext } from '../context/app-context';
import NavbarLink from './NavbarLink';
import NavbarUser from './NavbarUser';

const Navbar = () => {
  const context = useContext(AppContext);

  console.log(context);

  return (
    <nav>
      <NavbarLink>Dashboard</NavbarLink> | <NavbarLink>Products</NavbarLink> |
      <NavbarLink>
        <NavbarUser />
      </NavbarLink>
    </nav>
  );
};

export default Navbar;
