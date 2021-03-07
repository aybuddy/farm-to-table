import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  width: 100%;
  padding: 12px 24px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const NavLogo = styled(Link)`
  cursor: pointer;
  font-size: 36px;
  flex: 0.2;
  text-decoration: none;
  color: #b5dead;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 0.8;
  width: 100%;
  text-align: center;
  color: #b5dead;
`;

export const NavItem = styled.li`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  font-size: 24px;
  color: #b5dead;
`;

export const MobileNavIcon = styled.div`
  display: block;
`;
