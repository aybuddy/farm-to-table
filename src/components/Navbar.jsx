import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import {
  MobileNavIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavList,
  NavLogo,
} from './Navbar.styles';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
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
          <MobileNavIcon>
            <FaBars />
          </MobileNavIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
