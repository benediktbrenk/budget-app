import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: ${({ $gap = 24 }) => `${$gap}px`};
  margin-bottom: 80px;

  @media (min-width: 1100px) {
    margin-bottom: 5px;
  }
`;
