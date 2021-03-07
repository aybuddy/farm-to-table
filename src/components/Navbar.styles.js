import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 24px;
`;

export const NavLogo = styled(Link)`
  cursor: pointer;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-evenly;
  flex: 0.8;
  width: 100%;
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;
