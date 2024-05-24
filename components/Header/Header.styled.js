import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Headline = styled.h1`
  color: var(--color-primary);
  font-size: 1.6rem;
  text-align: center;
`;

export const LoginButtonAvatar = styled.span`
  @media (min-width: 1100px) {
    display: none;
  }
`;

export const LogoContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  left: 100px;

  @media (min-width: 1100px) {
    display: none;
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
`;
