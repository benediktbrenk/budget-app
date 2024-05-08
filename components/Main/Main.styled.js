import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: ${({ $gap = 24 }) => `${$gap}px`};
  margin-bottom: 60px;
`;
