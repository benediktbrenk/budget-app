import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  margin-bottom: 25px;
  gap: 20px;
  background: linear-gradient(
    45deg,
    var(--header-background-color-1),
    var(--header-background-color-2)
  );
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Headline = styled.h1`
  color: var(--header-textColor);
  font-size: 22px;
  text-align: center;
  padding: 10px 0 0 0;
  /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); */
`;
