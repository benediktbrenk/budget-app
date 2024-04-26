const { default: styled } = require("styled-components");

export const StyledDetailsContainer = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #d7d7d7;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.75rem;
  max-width: 25rem;
`;

export const StyledItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
