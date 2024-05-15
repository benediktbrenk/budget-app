import styled from "styled-components";

export const Headline = styled.h1`
  color: var(--header-textColor);
  font-size: 20px;
  text-align: center;
  padding: 10px 0 0 0;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  margin-bottom: 25px;
  gap: 20px;
  background: linear-gradient(45deg, #6cb9d0, #8ac6d1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// (45deg, #8ac6d1, #6cb9d0) schoene farbe
