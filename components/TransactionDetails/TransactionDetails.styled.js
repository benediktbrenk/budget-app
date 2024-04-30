import Link from "next/link";
const { default: styled } = require("styled-components");

export const StyledDetailsContainer = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #d7d7d7;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.75rem;
  min-width: 250px;
  max-width: 300px;
`;

export const StyledItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const StyledDiv = styled.div`
  background-color: #d7d7d7;
  padding: 1rem;
`;
