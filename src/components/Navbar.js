import React from 'react';
import { useAppContext } from '../context/app-context';
import NavbarLink from './NavbarLink';
import NavbarUser from './NavbarUser';

const Navbar = () => {
  const context = useAppContext();

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
