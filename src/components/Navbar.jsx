import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, NavItem, NavList, NavLogo } from './Navbar.styles';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to='/'>MRPX</NavLogo>
        <NavList>
          <NavItem>
            <NavLink to='/menu'>Menu</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/about'>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/contact'>Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/order'>Order</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </>
  );
};

export default Navbar;
