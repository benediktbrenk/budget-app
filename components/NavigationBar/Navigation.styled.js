import styled, { css } from "styled-components";
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
  gap: 3rem;

  @media (min-width: 1100px) {
    left: 0;
    height: 100dvh;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

export const NavLink = styled(Link)`
  font-size: 2rem;
  color: #343a40;
  text-decoration: none;
  display: flex;
  justify-content: center;
  border: none;
  width: 100%;
  height: fit-content;
  padding: 0.6rem;

  &:hover {
    cursor: pointer;
    color: #f8f9fa;
    background-color: #343a40;
    border-radius: 6px;
  }

  ${(props) =>
		props.$active &&
		css`
      color: #ffffff;
      background-color: #343a40;
      border-radius: 6px;
    `}
`;
