import { styled } from "styled-components";
import Link from "next/link";

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f8f9fa;
  z-index: 5;

  padding: 0.5rem;
  bottom: 0;
  position: fixed;
  height: 60px;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  color: inherit;
  border: none;
  //width: 100%;
  height: fit-content;
  max-width: 15dvh;
  //max-width: 700px;
  padding: 1rem 3rem;

  &:hover {
    cursor: pointer;
    background-color: #dee2e6;
    border-radius: 6px;
  }

  &:visited {
    color: inherit;
  }
`;
