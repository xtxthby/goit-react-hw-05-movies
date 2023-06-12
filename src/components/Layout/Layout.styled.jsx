import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  display: flex;
  margin: 0;
  padding: 10px;
  border-bottom: 1px lightslategray solid;
  box-shadow: 0px 0px 3px 1px lightslategray;
`;

export const NavItem = styled.li`
  padding: 10px;
  font-weight: bold;
  font-size: 18px;
`

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #000;  
  &.active {
    composes: link;
    color: brown;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 18px;
  padding: 14px;
  list-style: none;
`;