import styled, { css } from "styled-components";
import Link from "next/link";

export const NavBar = styled.nav`
  background-color: var(--color-secondary);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  bottom: 0;
  position: fixed;
  height: 60px;
  width: 100%;
  box-shadow: var(--box-shadow-nav);

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
  color: var(--color-text);
  text-decoration: none;
  display: flex;
  justify-content: center;
  border: none;
  width: 100%;
  height: fit-content;
  padding: 0.6rem;

  &:hover {
    cursor: pointer;
    background-color: var(--color-nav-hover);
    border-radius: 6px;
  }

  ${(props) =>
    props.$active &&
    css`
      color: white;
      background-color: var(--color-primary);
      border-radius: 6px;
    `}
`;

export const ProfileAvatar = styled.span`
  font-size: 2rem;
  color: #343a40;
  text-decoration: none;
  display: flex;
  justify-content: center;
  border: none;
  width: 100%;
  height: fit-content;
  padding: 0.6rem;
  display: none;

  @media (min-width: 1100px) {
    display: flex;
  }
`;

export const LogoContainer = styled.span`
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;
