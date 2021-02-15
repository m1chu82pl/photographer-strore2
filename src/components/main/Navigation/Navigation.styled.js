import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Wrapper = styled.ul`
  position: relative;
  background-color: rgb(212, 212, 212);
  display: grid;
  grid-template-columns: repeat(5, auto);
  `;

export const NavigationPoint = styled.li`
  list-style: none;
  margin: 10px auto;
  `;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  transition: 0.4s;

  &:hover {
    color: rgb(131, 122, 108);
  }

  &.active {
      color: rgb(55, 55, 73);
    }
`;

export const WrapperSticky = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgb(212, 212, 212);
  z-index: 10;
  `;

  export const WrapperStickyNav = styled.div`
    display: grid;
    grid-template-columns: repeat(5, auto);`