import { styled } from "styled-components";
import Link from "next/link";

export const NavBar = styled.nav`
  background-color: #f8f9fa;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  bottom: 0;
  position: fixed;
  height: 60px;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);

  @media (min-width: 1100px) {
    left: 0;
    height: 100dvh;
    width: 100px;
    flex-direction: column;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 700px;
  min-height: 700px;
  gap: 4rem;

  @media (min-width: 1100px) {
    left: 0;
    height: 100dvh;
    width: 100px;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
  }
`;

export const NavLink = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  border: none;
  width: 100%;
  height: fit-content;
  padding: 1rem;

  &:visited {
    color: #343a40;
  }

  &:hover {
    cursor: pointer;
    color: #f8f9fa;
    background-color: #343a40;
    border-radius: 6px;
  }
`;
